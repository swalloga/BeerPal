class Api::CitiesController < ApplicationController

  def index
    @cities = City.all
    @default_city = City.first
    render :index
  end

  def show
    @city = City.find(id: params[:id])
    render 'api/cities/show'
  end

private
  def city_params
    params.require(:city).permit(:name, :latitude, :longitude)
  end
end
