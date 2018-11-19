class Api::BarsController < ApplicationController
  def create
    @bar = Bar.new(bar_params)
    if @bar.save
      render json: @bar
    else
      render json: @bar.errors.full_messages, status: 422
    end
  end

  def update
    @bar = Bar.find_by(params[:id])
    if @bar.update(bar_params)
      render json: @bar
    else
      render json: @bar.errors.full_messages, status: 422
    end
  end

  def destroy
    bar = Bar.find_by(params[:id])
    bar.destroy
  end

  def index
    @bars = Bar.all
    render json: @bars
  end

  def show
    @bar = Bar.find(params[:id])
    render json: @bar
  end

  private
  def bar_params
    params.require(:bar).permit(:name, :address, :latitude, :longitude, :city_id)
  end

end
