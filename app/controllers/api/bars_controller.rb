class Api::BarsController < ApplicationController
  def create
    @bar = Bar.new(bar_params)
    if @bar.save
      render 'api/bars/show'
    else
      render json: @bar.errors.full_messages, status: 422
    end
  end

  def update
    @bar = Bar.find_by(id: params[:id])
    if @bar.update(bar_params)
      render 'api/bars/show'
    else
      render json: @bar.errors.full_messages, status: 422
    end
  end

  def destroy
    bar = Bar.find_by(id: params[:id])
    bar.destroy
  end

  def index
    @bars = Bar.all
    render :index
  end

  def show
    @bar = Bar.find(id: params[:id])
      render 'api/bars/show'
  end

  private
  def bar_params
    params.require(:bar).permit(:name, :address, :latitude, :longitude, :city_id)
  end

end
