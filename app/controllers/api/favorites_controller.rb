class Api::FavoritesController < ApplicationController
  before_action :ensure_logged_in

  def create
    @favorite = current_user.favorites.new(favorite_params)
    if @favorite.save
      render json: @favorite
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def index
    @favorites = current_user.favorites
    render :index
  end

  def destroy
    @favorite = current_user.favorites.find_by(id: params[:id])
    if @favorite
      @favorite.destroy!
    else
      render json: ['Favorite does not exist'], status: 422
    end
  end

  private

  def favorite_params
    params.require(:favorite).permit(:bar_id)
  end
end
