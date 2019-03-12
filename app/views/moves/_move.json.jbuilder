json.extract! move, :id, :as_string, :number, :x, :y, :player, :match_id, :created_at, :updated_at, :message, :type
json.url game_match_move_url(@game, @match, move, format: :json)

