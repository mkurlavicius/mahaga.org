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

  # POST /games/{game_id}/matches/{match_id}/moves.json
  def update
    @game = current_user.games.find(params[:id])
    respond_to do |format|
      format.json do
        if @game.update(game_params)
          render :show, status: :created, location: game_path(@game)
        else
          render json: @game.errors, status: :unprocessable_entity 
        end
      end
    end
  end
  
  private

    # Never trust parameters from the scary internet, only allow the white list through.

    def game_params
      params.fetch(:game, {}).permit(:name, :label, :description, :picture)
    end
  
  
end