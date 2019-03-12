module GameBase

  class Match < ApplicationRecord
    include AASM
    
    Player = GameBase::Player
    Event  = GameBase::Event
  
    belongs_to :player,  class_name: "GameBase::User",   foreign_key: "first_player_id"
    belongs_to :game,    class_name: "GameBase::Game",   foreign_key: "game_id"
    has_many   :moves,   class_name: "GameBase::Move",   foreign_key: "match_id", dependent: :destroy
    has_many   :squares, class_name: "GameBase::Square", foreign_key: "match_id", dependent: :destroy

    scope :of_game, ->(game){ where(:game_id => game.id) }
  
    enum winner:             Player.all, _prefix: :winner
    enum first_player_type:  Player.all, _prefix: :first_player_type
    enum second_player_type: Player.all, _prefix: :second_player_type
    enum status:             Event.all
    enum goes:               Player.all, _prefix: :goes 
    enum started_by:         Player.all, _prefix: :started_by
  
    aasm :cycle, column: :status, enum: true do
      state Event.running, initial: true
      state Event.finished

      event :finish do
        transitions from: [Event.running, Event.finished], to: Event.finished
      end
    end
  
    aasm :win, column: :winner, enum: true, use_transactions: false do
      state Player.nobody, initial: true
      state Player.computer
      state Player.human
      state Player.opponent
    
      event :computer_wins do
        transitions from: Player.nobody, to: Player.computer
        after do
          self.finish!
        end
      end
    
      event :human_wins do
        transitions from: Player.nobody, to: Player.human
        after do
          self.finish!
        end
      end
    
      event :opponent_wins  do
        transitions from: Player.nobody, to: Player.opponent
        after do
          self.finish!
        end
      end
    
      event :nobody_wins do
        transitions from: Player.nobody, to: Player.nobody
      end
      
    end


    def axis
      (1..self.size)
    end
  
    def reversed_axis
      self.axis.reverse
    end
  
    def size_to_s
      "#{self.size}x#{self.size}"
    end
  
    def last_move
      self.moves.reload.try(:first)
    end
  
    def next_move_number
      self.last_move.try(:number).try(:+, 1) || 1
    end
  
  end

end