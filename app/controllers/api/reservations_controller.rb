class Api::ReservationsController < ApplicationController

  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render :index
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def show
    @reservation = current_user.reservations.find_by(id: params[:id])
    render :show
  end

# TODO: update this to filter for current_user
  def index
    @reservations = Reservation.all
    # @reservations = current_user.reservations
    render :index
  end

  def update
    @reservation = current_user.reservations.find_by(id: params[:id])
    if @reservation.update(reservation_params)
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def destroy
    @reservation = current_user.reservations.find_by(id: params[:id])
    if @reservation
      @reservation.destroy!
    else
      flash.now[:errors] = @reservation.errors.full_messages
    end
    render :index
  end

  private

  def reservation_params
    params.require(:reservation).permit(:user_id, :bar_beer_id)
  end
end
