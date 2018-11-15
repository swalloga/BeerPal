class Api::BarBeersController < ApplicationController
  def create
    @barbeers = BarBeers.new(barbeers_params)
    if @barbeers.save
      render "/"
      # TODO: fix this
    else
      render json: @barbeers.errors.full_messages, status: 422
    end
  end

  private
  def barbeers_params
    # QUESTION: is bar_beers in the require correct?
    params.require(:bar_beers).permit(:bar_id, :beer_id, :date)
  end
end
