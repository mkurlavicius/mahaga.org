module GameBase

  class Move < ApplicationRecord
    include AASM

    Player = GameBase::Player

    enum player: Player.all
      
    belongs_to :match, class_name: "GameBase::Match"
    
    default_scope { order(number: :desc) }
    
    delegate :versus, :to => :match
    
    def self.messages
      self.new.messages
    end
      
    def to_s
      self.to_coordinate.to_letter_number
    end
    
    def to_square
      if self.x.present? && self.y.present?
        self.match.board.find_square_by(Coordinate.new(self.x, self.y))
      end
    end
    
    def to_coordinate
      Coordinate.new(self.as_string)
    end
  
    def resolve
      raise "Resolve method must be implemented"
    end
    
    def parse_update_square
      raise "Parse update square must be implemented"
    end
  
  end
  
end

