class Api::ReservationsController < ApplicationController

  before_action :ensure_logged_in

  def create
    @reservation = current_user.reservations.new(reservation_params)
    if @reservation.save
      render json: @reservation
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def show
    @reservation = current_user.reservations.find_by(id: params[:id])
    render :show
  end

  def index
    @reservations = current_user.get_res_info
    render :index
  end

  def update
    @reservation = current_user.reservations.find_by(id: params[:id])
    if @reservation && @reservation.update(reservation_params)
        render :show
    elsif @reservation
      render json: @reservation.errors.full_messages, status: 422
    else
      render json: ['Invalid reservation'], status: 422
    end
  end

  def destroy
    @reservation = current_user.reservations.find_by(id: params[:id])
    if @reservation
      @reservation.destroy!
    else
      render json: ['Reservation does not exist'], status: 422
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:bar_beer_id)
  end
end
