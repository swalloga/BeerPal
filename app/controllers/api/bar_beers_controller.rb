class Api::BarBeersController < ApplicationController
  def create
    @barbeer = BarBeer.new(barbeers_params)
    date = Date.new(params[:date])
    barbeers.date = date
    if @barbeer.save
      render json: @barbeer
      # TODO: fix this/redirect somewhere
    else
      render json: @barbeer.errors.full_messages, status: 422
    end
  end

  def update
    @barbeer = BarBeer.find_by(params[:id])
    if @barbeer.update(barbeers_params)
      render json: @barbeer
    else
      render json: @barbeer.errors.full_messages, status: 422
    end
  end

  def destroy
    barbeer = BarBeer.find_by(params[:id])
    barbeer.destroy
  end

  def index
    # TODO: change BarBeer.all to be BarBeer.allbydate
    @barbeers = BarBeer.all.includes(:bar, :beer, :city)
    render 'api/bar_beers/index'
  end

  def show
    @barbeer = BarBeer.find(params[:id])
    render json: @barbeer
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
    params.require(:bar_beer).permit(:bar_id, :beer_id, :date)
  end
end
