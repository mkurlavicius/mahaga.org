class MoveSerializer < ActiveModel::Serializer
  attributes :id, :as_string, :number, :x, :y, :player, :match_id, :created_at, :updated_at, :message, :type, :match_id
end

