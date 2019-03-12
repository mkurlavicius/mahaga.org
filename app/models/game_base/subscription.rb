module GameBase

  class Subscription < ApplicationRecord

    belongs_to :user, class_name: "GameBase::User", foreign_key: "user_id"
    belongs_to :game, class_name: "GameBase::Game", foreign_key: "game_id"

  end
  
end
