module TicTacToe

  class Board

    Player     = GameBase::Player
    Coordinate = GameBase::Coordinate
    Line       = TicTacToe::Line
    
    attr_accessor :match, :squares, :size, :axis, :reversed_axis
    
    def initialize(match)
      @match         = match
      @squares       = match.squares.reload.all.to_a
      @size          = match.size
      @axis          = match.axis
      @reversed_axis = @axis.to_a.reverse
    end
    
    def prepare
      iterate_coordinates do |x_coordinate, y_coordinate|
        self.match.squares.create(
          :x      => x_coordinate,
          :y      => y_coordinate,
          :status => GameBase::Player.nobody
        )
      end
    end
    
    def last_move
      last_move = self.match.last_move
    end
    
    def update
      self.match.update_board
    end
    
    def iterate_coordinates
      self.axis.each do |x_coordinate|
        self.axis.each do |y_coordinate|
          yield(x_coordinate, y_coordinate)
        end
      end
    end
    
    def all(predicate)
      self.squares.select(&predicate)
    end
    
    def find_square_by(coordinate)
      self.squares.find do |item|
        item.x == coordinate.x &&
        item.y == coordinate.y
      end || raise("The square #{coordinate.x}#{coordinate.y} was NOT FOUND")
    end
    
    def find_square_by_xy(x, y)
      self.find_square_by(Coordinate.new(x,y))
    end
    
    def random_empty_square
      self.squares.all(:empty?).try(:shuffle).try(:first)
    end
    
    def horizontals
      self.axis.collect do |y| 
        self.squares.select{|item| item.y == y }.sort{|i,j| i.x <=> j.x}
      end
    end
    
    def verticals
      self.axis.collect do |x|
        self.squares.select{|item| item.x == x }.sort{|i,j| i.y <=> j.y }
      end
    end
    
    def top_down
      self.axis.collect do |x_coordinate|
        self.squares.find do |item|
          item.x == x_coordinate &&
          item.y == ((self.size + 1) - x_coordinate)
        end
      end
    end
    
    def center_and_two_corners?
      (
        self.square_is?(Player.computer, 2, 2) &&
        self.square_is?(Player.human,    1, 1) &&
        self.square_is?(Player.human,    3, 3)
      ) || (
        self.square_is?(Player.computer, 2, 2) &&
        self.square_is?(Player.human,    1, 3) &&
        self.square_is?(Player.human,    3, 1) 
      )
    end
    
    def exceptional_move
      [
        self.find_square_by_xy(1,2),
        self.find_square_by_xy(2,1),
        self.find_square_by_xy(3,2),
        self.find_square_by_xy(2,3)
      ].sample
    end
    
    def square_is?(player, x, y)
      self.find_square_by_xy(x,y).player == player
    end
    
    def bottom_up
      self.squares.select(&:same_coordinates?)
    end
    
    def diagonales
      [
        Line.new(:status => Line.diagonal, :squares => top_down,  :size => self.size, :index => 1),
        Line.new(:status => Line.diagonal, :squares => bottom_up, :size => self.size, :index => 2)
      ]
    end
    
    def lines
      @lines ||= not_cached_lines
    end
    
    def not_cached_lines
      horizontals.each_with_index.map do |squares, index| 
        Line.new(
          :status   => Line.horizontal,
          :squares  => squares, 
          :size     => self.size, 
          :index    => index + 1
        )
      end +
      verticals.each_with_index.map do |squares, index| 
        Line.new(
          :status   => Line.vertical,
          :squares  => squares, 
          :size     => self.size, 
          :index    => index + 1
        )
      end + diagonales
    end
    
    def human_lines
      self.lines.select(&:human_won?)
    end
    
    def computer_lines
      self.lines.select(&:computer_won?)
    end
    
    def human_won?
      human_lines.present?
    end
    
    def computer_won?
      computer_lines.present?
    end
    
    def update_winning_squares
      case
      when human_won?    then human_lines.execute(:update_winning_squares)
      when computer_won? then computer_lines.execute(:update_winning_squares)
      else return false
      end
    end
    
    def has_ended_no_winner?
      self.lines.all_of_them?(:no_winner?)  
    end
    
    def control
      self.squares.sum do |square|
        square_control(square)
      end
    end
    
    def defense
      self.squares.sum do |square|
        square_defense(square)
      end
    end
    
    def empty_squares
      self.squares.select{|item| item.nobody? }
    end
    
    def squares_with_points
      self.empty_squares.collect do |item|
        item.control = square_control(item)
        item.defense = square_defense(item)
        item
      end
    end
    
    def offensive_move
      self.squares_with_points.top(:control).top(:defense).sample
    end
    
    def defensive_move
      self.squares_with_points.top(:defense).top(:control).sample
    end
    
    def points(square, subject)
      square_lines(square).sum do |line|
        line.points(subject)
      end
    end
          
    def square_control(square)
      points(square, :control)
    end
          
    def square_defense(square)
      points(square, :defense)
    end
    
    def line(status, index)
      self.lines.find do |item|
        (item.status == status) && (item.index == index)
      end || raise("Line status=(#{status}), index=(#{index}) was not found")
    end
    
    def square_lines(square)
      [
        horizontal_square_line(square),
        vertical_square_line(square),
        bottom_up_square_line(square),
        top_down_square_line(square)
      ].compact
    end
          
    def horizontal_square_line(square)
      self.line(Line.horizontal, square.y)
    end
          
    def vertical_square_line(square)
      self.line(Line.vertical, square.x)
    end
    
    def top_down_square_line(square)
      if sum_is_size_plus?(square)
        self.line(Line.diagonal, 1)
      end
    end
    
    def bottom_up_square_line(square)
      if square.same_coordinates?
        self.line(Line.diagonal, 2)
      end
    end
    
    def sum_is_size_plus?(square)
      (square.x + square.y) == self.size + 1
    end
          
  end

end