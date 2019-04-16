module GameBase

  class Game < ApplicationRecord

    has_many :matches,           class_name: "GameBase::Match",          foreign_key: "game_id"
    has_many :subscriptions,     class_name: "GameBase::Subscription",   foreign_key: "game_id"
    has_many :players,           class_name: "GameBase::User",           through: :subscriptions
    belongs_to :system_property, class_name: "GameBase::SystemProperty", foreign_key: "system_properties_id"

  end
  
end
