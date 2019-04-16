module TicTacToe
  
  class Score

    Player = GameBase::Player

    attr_accessor *Player.options

    def initialize(line)
      Player.options.each do |player_type|
        instance_variable_set("@#{player_type}", 0)
      end
      
      line.squares.each do |square|
        instance_variable_set("@#{square.status}", (instance_variable_get("@#{square.status}") + 1))
      end
    end

  end

end