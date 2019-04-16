module ApplicationHelper
  
  def go_to_game_title(game)
    (game.finished? ? "Review" : "Continue to play")
  end
  
  def board_size_options
    (3..8).collect{|size| [size.to_s, size.to_s]}
  end
  
  def starts_options
    [
      ['You', 'human'], 
      ['Computer','computer']
    ]
  end
  
  
end
