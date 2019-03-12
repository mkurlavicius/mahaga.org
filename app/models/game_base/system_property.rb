module GameBase

  class SystemProperty < ApplicationRecord

    has_many :games, class_name: "GameBase::Game", foreign_key: "system_properties_id"

  end

end
