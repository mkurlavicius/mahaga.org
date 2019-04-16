module TicTacToe
  
  class Match < GameBase::Match
    
    Player   = GameBase::Player
    Board    = TicTacToe::Board
    Computer = TicTacToe::Computer

    belongs_to :first_player,  class_name: "GameBase::User",    foreign_key: "first_player_id"
    belongs_to :second_player, class_name: "GameBase::User",    foreign_key: "second_player_id", optional: true
    has_many :squares,         class_name: "TicTacToe::Square", foreign_key: "match_id", dependent: :destroy
    has_many :moves,           class_name: "TicTacToe::Move",   foreign_key: "match_id", dependent: :destroy
    
    after_create :prepare_board, :computers_move
    delegate :human_won?, :computer_won?, :has_ended_no_winner?, :update_winning_squares, to: :board
    
    aasm :move, column: :goes, enum: true, use_transactions: false do
      state Player.nobody, initial: true
      state Player.human
      state Player.computer
      state Player.opponent
    
      event :human_moves do
        transitions :from => Player.options, :to => Player.computer
        after do
          self.board.update
        end
      end
    
      event :computer_moves do
        transitions :from => [Player.nobody, Player.human, Player.computer], :to => Player.human
        after do
          self.board.update
        end
      end
    
      event :nobody_moves do
        transitions from: [Player.human, Player.opponent, Player.computer], to: Player.nobody
      end
    end
    
    def prepare_board
      self.board.prepare
    end
    
    def board
      @board ||= Board.new(self)
    end 
    
    def update_board
      @board = Board.new(self.reload)
    end
    
    def computers_move
      if self.goes_computer?
        if computer_move = Computer.new(self).new_move
          if computer_move.save
            computer_move.update_attribute(:message, "Computer starts #{computer_move}.")
          end
        else
          raise "Failed to save the computers move"
        end
      end
    end
    
    def starts
      self.started_by || Player.computer
    end
  
    def starts=(string)
      if string.match(Player.to_regexp)
        self.started_by = Player.all[string]
        self.goes       = Player.all[string]
        self.first_player_type  = self.started_by
        self.second_player_type = self.versus
      else 
        raise 'The game can only be started by computer or player'
      end
    end
  
    def versus
      case started_by.to_sym
      when Player.computer then Player.human
      when Player.human    then Player.computer
      else raise "Unsupported player type for opponent!"
      end
    end
    
  end
  
end
  