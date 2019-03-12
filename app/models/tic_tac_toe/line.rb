module TicTacToe

  class Line < GameBase::SimpleObject
  
    conditions :horizontal, :vertical, :diagonal
  
    attr_accessor :squares, :size, :index, :status

    Score  = TicTacToe::Score
    Player = GameBase::Player
  
    def initialize(args)
      args.each do |key, value|
        instance_variable_set("@#{key}", value)
      end
    end
  
    def almost_size
      self.size - 1
    end
  
    def empty?
      score.nobody.is?(self.size)
    end
  
    def no_human?
      score.human.zero?
    end
  
    def no_winner?
      score.human.more_than?(0) &&
      score.computer.more_than?(0)
    end
  
    def points(of_what)
      case of_what
      when :control
        if no_human?
          if empty?
            self.size
          else
            score.nobody > score.computer ? score.nobody : score.computer
          end
        else
          0
        end
      when :defense
        case
        when almost_full?
          only_human? ? self.size : 0
        when only_human?
          self.size - score.nobody
        else
          0
        end
      else raise "Points format not supported!"
      end
    end
  
    alias_method :free?, :empty?

    def almost_full?
      score.nobody.is?(1)
    end
  
    def almost_empty?
      score.nobody.is?(self.almost_size)
    end

    def score
      Score.new(self)
    end
  
    def computer_won?
      score.computer.is?(self.size)
    end
  
    def human_won?
      score.human.is?(self.size)
    end

    def somebody_won?
      computer_won? or player_won?
    end

    def winning?
      (computer_won? || player_won?) ? self : false
    end
  
    def only?(player)
      score.try(player).more_than?(0)         and
      score.try(player).less_than?(self.size) and
      score.try(opponent(player)).zero?
    end

    def only_computer?
      only?(:computer)
    end
  
    def only_human?
      only?(:human)
    end
  
    def opponent(player)
      case player.to_sym
      when Player.human    then Player.computer
      when Player.computer then Player.human
      else raise "Unsupported opponent (#{player})"
      end
    end

    def almost_winning_by_computer?
      score.computer.is?(self.almost_size) and
      score.nobody.is?(1)
    end
  
    def first_square
      self.squares.first
    end
  
    def match
      self.first_square.match
    end
  
    def update_winning_squares
      player = first_square.status
      match.try("#{player}_wins!")
      self.make_winning_squares
      self
    end
  
    def make_winning_squares
      self.squares.each do |square|
        square.update_attribute(:winning, true)
      end
    end
  
  end
  
end