class Api::CitiesController < ApplicationController
  def create
    @city = City.new(city_params)
    if @city.save
      render "/"
      # TODO: come back to this?
    else
      render json: @city.errors.full_messages, status: 422
    end
  end

private
  def city_params
    params.require(:city).permit(:name, :latitude, :longitude)
  end
end
