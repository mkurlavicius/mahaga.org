module TicTacToe

  class Move < GameBase::Move

    Coordinate = GameBase::Coordinate
    Player     = GameBase::Player
    End        = GameBase::End

    belongs_to :match, class_name: 'TicTacToe::Match'
    
    before_create :parse_update_square
    after_create  :resolve
    after_create  :computers_response, if: :computers_response_needed? 
    
    delegate :versus, :to => :match
  
    def to_square
      if self.x.present? && self.y.present?
        self.match.board.find_square_by(Coordinate.new(self.x, self.y))
      end
    end
    
    def computers_response_needed?
      self.human? and not self.match.finished?
    end
    
    def computers_response
      computer = Computer.new(self.match.reload)
      computer.new_move.save
    end
    
    def messages
      ActiveSupport::HashWithIndifferentAccess.new({
        Player.human => {
          End.win     => "Your move is #{self}. Congratulations, you have won!!! ",
          End.draw    => "Player moves #{self}. No winning moves left. No one has won.",
          End.nothing => "Player moves #{self}"
        },
        Player.computer => {
          End.win     => "Computer responds #{self} and wins. Game is finished.",
          End.draw    => "Computer responds #{self}. No moves left. Game is finished.",
          End.nothing => "Computer responds #{self}."
        }
      })
    end
    
    def resolve
      # byebug
      self.match.update_board
      case
      when self.match.try("#{player}_won?")
        self.match.update_winning_squares
        self.update_attribute(:message, self.messages[self.player][End.win])
        return
      when self.match.has_ended_no_winner?
        self.match.nobody_wins!
        self.update_attribute(:message, self.messages[self.player][End.draw])
        self.match.finish!
      else
        self.match.nobody_wins!
        self.update_attribute(:message, self.messages[self.player][End.nothing])
      end
      self.match.try("#{player}_moves!")
    end
    
    def parse_update_square
      self.x      = to_coordinate.x
      self.y      = to_coordinate.y
      self.number = self.match.next_move_number
      self.to_square.try("#{self.player}_moves!")
    end
  
  end
  
end

