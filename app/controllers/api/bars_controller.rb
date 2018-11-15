class Api::BarsController < ApplicationController
  def create
    @bar = Bar.new(bar_params)
    if @bar.save
      render "/"
      # TODO: fix this
    else
      render json: @bar.errors.full_messages, status: 422
    end
  end
  # TODO: add update and destroy methods
  private
  def bar_params
    params.require(:bar).permit(:name, :address, :latitude, :longitude, :city_id)
  end

end
