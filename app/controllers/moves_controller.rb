class MovesController < ApplicationController

  before_action :set_game
  before_action :set_match
  before_action :set_move, only: [:show]

  # GET /games/{game_id}/matches/{match_id}/moves.json
  def index
    respond_to do |format|
      format.json do
        @moves = @match.moves.paginate(page: default_page_number)
      end
    end
  end

  # GET /games/{game_id}/matches/{match_id}/moves/1.json
  def show
    respond_to do |format|
      format.json do
        render :show, {:game => @game, :match => @match, :move => @move }
      end
    end
  end
  
  # POST /games/{game_id}/matches/{match_id}/moves.json
  def create
    @move = @match.moves.build(move_params)
    respond_to do |format|
      format.json do
        if @move.save
          serialized_data = ActiveModelSerializers::Adapter::Json.new(MoveSerializer.new(@move)).serializable_hash
          MatchChannel.broadcast_to(@move.match, serialized_data)
          render :show, status: :created, location: game_match_move_path(@game, @match, @move)
        else
          render json: @move.errors, status: :unprocessable_entity 
        end
      end
    end
  end

  protected

    def set_move
      @move = Move.find(params[:id])
    end

    def move_params
      params.fetch(:move, {}).permit(:player, :as_string)
    end
end
