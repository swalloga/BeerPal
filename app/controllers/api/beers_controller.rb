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

  def update
    @beer = Beer.find_by(params[:id])
    if @beer.update(beer_params)
      render "/"
      # TODO: fix this/redirect somewhere
    else
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def destroy
    beer = Beer.find_by(params[:id])
    beer.destroy
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :description, :price, :abv)
  end

end
