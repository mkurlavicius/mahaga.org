class SystemPropertiesController < ApplicationController
  
  # GET /system_properties.json
  def show
    respond_to do |format|
      format.json do
        @system_properties = GameBase::SystemProperty.first
      end
    end
  end
  
  private

    # Never trust parameters from the scary internet, only allow the white list through.

    def game_params
      params.fetch(:system_property, {}).permit(:main_name, :main_caption, :main_description)
    end
  
  
end


