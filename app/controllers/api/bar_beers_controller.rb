class Api::BarBeersController < ApplicationController
  def create
    @barbeer = BarBeer.new(barbeers_params)
    date = Date.new(params[:date])
    barbeers.date = date
    if @barbeer.save
      render 'api/barbeers/show'
    else
      render json: @barbeer.errors.full_messages, status: 422
    end
  end

  def update
    @barbeer = BarBeer.find_by(params[:id])
    if @barbeer.update(barbeers_params)
      render 'api/barbeers/show'
    else
      render json: @barbeer.errors.full_messages, status: 422
    end
  end

  def destroy
    barbeer = BarBeer.find_by(params[:id])
    barbeer.destroy
  end

  def index
    @barbeers = BarBeer.find_current_deals(params[:date], params[:city_id])
    render :index
  end

  def show
    @barbeer = BarBeer.find(id: params[:id])
      render 'api/barbeers/show'
  end

  # def index_by_beer
  #   @barbeers = BarBeer.all.where(beer_id: params[:beer_id]).includes(:beer, :bar)
  #   render json: @barbeers
  #   # TODO: maybe adjust this to filter for date?
  # end
  #
  # def index_by_bar
  #   @barbeers = BarBeer.all.where(bar_id: params[:bar_id]).includes(:beer, :bar)
  #   render json: @barbeers
  #   # TODO: maybe adjust this to filter for date?
  # end

  private
  def barbeers_params
    params.require(:bar_beer).permit(:bar_id, :beer_id, :date)
  end
end
