class Api::BeersController < ApplicationController
  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      render "/"
      # TODO: come back to this and update redirect?
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end
  # TODO: add update and destroy methods
  private
  def beer_params
    params.require(:beer).permit(:name, :description, :price, :abv)
  end

end
