class GamesController < ApplicationController
  
  before_action :set_game, only: [:show, :update, :destroy]
  
  # GET /games.json
  def index
    respond_to do |format|
      format.json do
        @games = current_user.games.paginate(page: default_page_number)
      end
    end
  end
  
  # GET /games/{:id}.json
  def show
    respond_to do |format|
      format.json()
    end
  end
  
  private

    # Never trust parameters from the scary internet, only allow the white list through.

    def game_params
      params.fetch(:game, {}).permit(:name, :label, :description)
    end
  
  
end