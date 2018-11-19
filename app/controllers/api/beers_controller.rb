class Api::BeersController < ApplicationController
  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      render json: @beer
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def update
    @beer = Beer.find_by(params[:id])
    if @beer.update(beer_params)
      render json: @beer
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def destroy
    beer = Beer.find_by(params[:id])
    beer.destroy
  end

  def index
    @beers = Beer.all
    render json: @beers
  end

  def show
    @beer = Beer.find(params[:id])
    render json: @beer
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :description, :price, :abv)
  end

end
