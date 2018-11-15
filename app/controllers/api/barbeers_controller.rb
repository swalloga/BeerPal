class Api::BarBeersController < ApplicationController
  def create
    @barbeers = BarBeers.new(bar_params)
    if @barbeers.save
      render "/"
      # TODO: fix this
    else
      render json: @barbeers.errors.full_messages, status: 422
    end
  end

  private
  def barbeers_params
    params.require(:barbeers).permit(:bar_id, :beer_id, :date)
  end
end
