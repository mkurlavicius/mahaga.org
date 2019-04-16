module GameBase

  class Square < ApplicationRecord
    include AASM
  
    belongs_to :match, class_name: "GameBase::Match", foreign_key: "match_id"

    def to_s
      self.status
    end
  
    # This identifies squares in one of the diagonals
    def same_coordinates?
      self.x == self.y
    end
  
    # This identifies squares in the other diagonal
    def sum_is_size_plus?
      (self.x + self.y) == self.match.size + 1
    end
  
  end
  
end