module TicTacToe
  
  class Computer
    
    DefenseBoost = 6
    Player       = GameBase::Player
    
    attr_accessor :match
    
    def initialize(match)
      @match = match
    end
    
    def optimal_square
      if the_exception?
        match.board.try(:exceptional_move)
      else
        match.board.try(priority_move)
      end
    end
    
    def the_exception?
      match.size             == 3 &&
      match.next_move_number == 4 &&
      match.started_by       == Player.human_to_s &&
      match.board.center_and_two_corners?
    end
    
    def priority_move
      if control_is_more_important?
        :offensive_move
      else
        :defensive_move
      end
    end
    
    def control_is_more_important?
      match.board.control > (match.board.defense * DefenseBoost)
    end
    
    def new_move
      self.match.update_board
      if the_square = optimal_square
        the_square.to_move_object player: Player.computer
      else
        raise "Something wrong happened, can not find a good move"
      end
    end 
    
  end

end