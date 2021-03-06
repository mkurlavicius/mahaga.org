json.id              game.id 
json.name            game.name 
json.label           game.label 
json.description     game.description 
json.winCondition    game.win_condition
json.wikipediaQuery  game.wikipedia_query 
json.settings        game.settings 
json.createdAt       game.created_at

if game.picture.attached?
  json.picture(url_for(game.picture))
end