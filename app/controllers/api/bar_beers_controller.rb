class Api::BarBeersController < ApplicationController
  def create
    @barbeers = BarBeer.new(barbeers_params)
    date = Date.new(params[:date])
    barbeers.date = date
    if @barbeers.save
      render json: @barbeers
      # TODO: fix this/redirect somewhere
    else
      render json: @barbeers.errors.full_messages, status: 422
    end
  end

  def update
    @barbeers = BarBeer.find_by(params[:id])
    if @barbeers.update(barbeers_params)
      render json: @barbeers
      # TODO: fix this/redirect somewhere
    else
      render json: @barbeers.errors.full_messages, status: 422
    end
  end

  def destroy
    barbeers = BarBeer.find_by(params[:id])
    barbeers.destroy
  end

  def index
    render json: BarBeer.all
  end

  def show
    render json: BarBeer.find(params[:id])
  end

  def index_by_beer
    @barbeers = BarBeer.all.where(beer_id: params[:beer_id]).includes(:beer, :bar)
    render json: @barbeers
    # TODO: maybe adjust this to filter for date?
  end

  def index_by_bar
    @barbeers = BarBeer.all.where(bar_id: params[:bar_id]).includes(:beer, :bar)
    render json: @barbeers
    # TODO: maybe adjust this to filter for date?
  end

  # def index_by_date
  #   # TODO: come back and write this at some point
  # end

  private
  def barbeers_params
    # QUESTION: is bar_beers in the require correct?
    params.require(:bar_beers).permit(:bar_id, :beer_id, :date)
  end
end
