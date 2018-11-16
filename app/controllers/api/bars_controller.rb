class Api::BarsController < ApplicationController
  def create
    @bar = Bar.new(bar_params)
    if @bar.save
      render "/"
      # TODO: fix this
    else
      render json: @bar.errors.full_messages, status: 422
    end
  end

  def update
    @bar = Bar.find_by(params[:id])
    if @bar.update(bar_params)
      render "/"
      # TODO: fix this/redirect somewhere
    else
      render json: @bar.errors.full_messages, status: 422
    end
  end

  def destroy
    bar = Bar.find_by(params[:id])
    bar.destroy
  end

  def index
    render json: Bar.all
  end

  def show
    render json: Bar.find(params[:id])
  end

  private
  def bar_params
    params.require(:bar).permit(:name, :address, :latitude, :longitude, :city_id)
  end

end
