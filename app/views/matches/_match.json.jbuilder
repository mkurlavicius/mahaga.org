json.id                 match.id
json.started_by         match.started_by
json.size               match.size             
json.created_at         match.created_at  
json.updated_at         match.updated_at    
json.status             match.status  
json.goes               match.goes  
json.first_player_type  match.first_player_type  
json.second_player_type match.second_player_type  
json.winner             match.winner  
json.type               match.type  
json.game_id            match.game_id  
json.first_player_id    match.first_player_id  
json.second_player_id   match.second_player_id
json.squares do |json|
  json.array! match.squares, partial: 'squares/square', as: :square
end
  