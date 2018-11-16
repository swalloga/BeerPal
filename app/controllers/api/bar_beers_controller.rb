class Api::BarBeersController < ApplicationController
  def create
    @barbeers = BarBeers.new(barbeers_params)
    date = Date.new(params[:date])
    barbeers.date = date
    if @barbeers.save
      render "/"
      # TODO: fix this/redirect somewhere
    else
      render json: @barbeers.errors.full_messages, status: 422
    end
  end

  def update
    @barbeers = BarBeers.find_by(params[:id])
    if @barbeers.update(barbeers_params)
      render "/"
      # TODO: fix this/redirect somewhere
    else
      render json: @barbeers.errors.full_messages, status: 422
    end
  end

  def destroy
    barbeers = BarBeers.find_by(params[:id])
    barbeers.destroy
  end

  private
  def barbeers_params
    # QUESTION: is bar_beers in the require correct?
    params.require(:bar_beers).permit(:bar_id, :beer_id, :date)
  end
end
