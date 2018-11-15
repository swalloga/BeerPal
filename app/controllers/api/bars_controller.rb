class Api::BarsController < ApplicationController
  def create
    @bar = Bar.new(bar_params)
    if @bar.save
      render "/"
    else
      render json: @bar.errors.full_messages, status: 422
    end
  end

  private
  def bar_params
    params.require(:bar).permit(:name, :address, :latitude, :longitude, :city_id)

  end

end
