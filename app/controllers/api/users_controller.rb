class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      UserMailer.with(user: @user).welcome_email.deliver_now
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render "api/users/show"
  end

  def update
    @user = User.find_by(id: params[:id])
    @user.update_beer_allowance(params[:beerQty].to_i)
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:username, :name, :email, :password, :beer_allowance)
  end
end
