class ApplicationController < ActionController::Base

  skip_before_action :verify_authenticity_token, :if => Proc.new { |c| c.request.format == 'application/json' }

  User = GameBase::User
  Game = GameBase::Game
  
  protected

  def game_class
    "#{@game.name}::Game".constantize
  end

  def match_class
    "#{@game.name}::Match".constantize
  end

  def set_game
    @game = current_user.games.find(self.game_id)
  end

  def set_match
    @match = current_user.matches.find(self.match_id)
  end

  def game_id
    params[:game_id].presence ||
    params[:id].presence
  end

  def match_id
    params[:match_id].presence ||
    params[:id].presence
  end
  
  def default_page_number
    (params[:page] || 1).to_i
  end
  
  def current_user
    session[:user_id].present? ? existing_user : create_user
  end
  
  def existing_user
    User.find_by_id(session[:user_id]) || create_user
  end
  
  def create_user
    User.create.tap do |user|
      user.games << Game.all
      session[:user_id] = user.id
    end
  end
  
end
