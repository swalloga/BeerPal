class Api::BeersController < ApplicationController
  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      render "/"
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  private
  def beer_params
    params.require(:beer).permit(:name, :description, :price, :abv)

  end

end
