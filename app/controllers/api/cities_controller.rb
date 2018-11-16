class Api::CitiesController < ApplicationController
  def create
    @city = City.new(city_params)
    if @city.save
      render json: @city
      # TODO: come back to this and update redirect?
    else
      render json: @city.errors.full_messages, status: 422
    end
  end

  def update
    @city = City.find_by(params[:id])
    if @city.update(city_params)
      render json: @city
      # TODO: fix this/redirect somewhere
    else
      render json: @city.errors.full_messages, status: 422
    end
  end

  def index
    render json: City.all
  end

  def show
    render json: City.find(params[:id])
  end

private
  def city_params
    params.require(:city).permit(:name, :latitude, :longitude)
  end
end
