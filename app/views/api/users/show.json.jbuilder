json.user do
  json.partial! "api/users/user", user: @user
end


json.reservationForToday @user.find_reservation_by_date(Date.today)
