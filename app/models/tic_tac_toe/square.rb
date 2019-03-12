module TicTacToe

  class Square < GameBase::Square

    Player     = GameBase::Player
    Coordinate = GameBase::Coordinate
  
    attr_accessor :control, :defense

    belongs_to :match, class_name: 'TicTacToe::Match', foreign_key: 'match_id'
  
    enum status: Player.all, _prefix: :status
  
    aasm column: :status, enum: true, use_transactions: false do
      state Player.nobody, initial: true
      state Player.human
      state Player.computer
      state Player.opponent
    
      event :human_moves do
        transitions from: Player.nobody, to: Player.human
      end
    
      event :computer_moves do
        transitions from: Player.nobody, to: Player.computer
      end
    
      event :opponent_moves do
        transitions from: Player.nobody, to: Player.opponent
      end
    
      event :nobody_moves do
        transitions from: [Player.human, Player.opponent, Player.computer], to: Player.nobody
      end
    end
  
    def player
      Player.try(self.status)
    end
  
    def to_coordinate
      Coordinate.new(self)
    end
  
    def to_move
      to_coordinate.to_one_nine
    end
  
    # Player must be passed on call
    def to_move_object(args)
      self.match.moves.build(
        :as_string => self.to_coordinate,
        :x         => self.x,
        :y         => self.y,
        :player    => args[:player],
      )
    end
  
    def to_s
      case self.status.to_sym
      when Player.nobody                    then " "
      when Player.human                     then "x"
      when Player.computer, Player.opponent then "o"
      else raise "Unsupported square status"
      end
    end
  
  end
  
end