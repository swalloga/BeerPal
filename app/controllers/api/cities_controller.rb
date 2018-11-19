class Api::CitiesController < ApplicationController
  def create
    @city = City.new(city_params)
    if @city.save
      render json: @city
    else
      render json: @city.errors.full_messages, status: 422
    end
  end

  def update
    @city = City.find_by(params[:id])
    if @city.update(city_params)
      render json: @city
    else
      render json: @city.errors.full_messages, status: 422
    end
  end

  def index
    @cities = City.all
    render json: @cities
  end

  def show
    @city = City.find(params[:id])
    render json: @city
  end

private
  def city_params
    params.require(:city).permit(:name, :latitude, :longitude)
  end
end
