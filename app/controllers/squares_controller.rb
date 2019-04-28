class SquaresController < ApplicationController

  before_action :set_game
  before_action :set_match

  # GET /games/{game_id}/matches/{match_id}/squares.json
  def index
    respond_to do |format|
      format.json do
        @squares = @match.squares.all
      end
    end
  end

  def show
    respond_to do |format|
      format.json do
        render :show, {:game => @game, :match => @match, :square => @square }
      end
    end
  end

end
