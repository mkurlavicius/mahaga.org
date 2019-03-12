module GameBase

  class User < ApplicationRecord
    
    has_many :subscriptions,        class_name: "GameBase::Subscription", foreign_key: "user_id"
    has_many :matches_when_first,   class_name: "GameBase::Match",        foreign_key: "first_player_id"
    has_many :matches_when_second,  class_name: "GameBase::Match",        foreign_key: "second_player_id"
    has_many :games,                class_name: "GameBase::Game",         through: :subscriptions

    def matches
      self.matches_when_first.or(matches_when_second)
    end

  end
  
end
