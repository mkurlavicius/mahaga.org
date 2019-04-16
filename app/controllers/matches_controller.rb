class MatchesController < ApplicationController
  
  before_action :set_game
  before_action :set_match, only: [:show, :destroy]
  
  # GET /games/{:game_id}/matches.json
  def index
    respond_to do |format|
      format.json do
        @matches = current_user.matches.of_game(@game).paginate(page: default_page_number)
      end
    end
  end
  
  # POST /games/{:game_id}/matches.json
  def create
    @match = self.match_class.new(game_params)
    respond_to do |format|
      format.json do
        if @match.save
          render :show, status: :created, location: game_match_url(@game, @match)
        else
          render json: @match.errors, status: :unprocessable_entity
        end
      end
    end
  end
  
  # GET /games/{:game_id}/matches/{:id}.json
  def show
    respond_to do |format|
      format.json()
    end
  end
  
  # def destroy
  #   @game.destroy
  #   respond_to do |format|
  #     format.html { redirect_to games_url, notice: 'Move was successfully destroyed.' }
  #     format.json { head :no_content }
  #   end
  # end
  
  protected

    # Never trust parameters from the scary internet, only allow the white list through.
    def game_params
      params.fetch(:match, {}).permit(:starts, :size).merge({
        :game_id          => @game.id,
        :first_player_id  => current_user.id
      })
    end
  
end