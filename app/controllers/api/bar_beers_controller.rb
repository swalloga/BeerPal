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
    @barbeers = BarBeer.find_current_deals(params[:city_id])
    render :index
  end

  def show
    @barbeer = BarBeer.find(id: params[:id])
      render 'api/barbeers/show'
  end

  def index_by_beer
    beer_id = Beer.find_by(name: params[:name])
    @barbeers = BarBeer.find_current_deals(params[:date], params[:city_id]).where(beer_id: beer_id).includes(:beer, :bar)
    render json: @barbeers
  end

  def index_by_bar
    bar_id = Beer.find_by(name: params[:name])
    @barbeers = BarBeer.find_current_deals(params[:date], params[:city_id]).where(bar_id: params[:bar_id]).includes(:beer, :bar)
    render json: @barbeers
  end

  private
  def barbeers_params
    params.require(:bar_beer).permit(:bar_id, :beer_id, :date)
  end
end
