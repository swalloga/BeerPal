class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render "api/users/show"
  end

  private
  def user_params
    params.require(:user).permit(:username, :name, :email, :password, :beer_allowance)
  end
end
