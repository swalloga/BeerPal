json.reservations do
  @reservations.each do |reservation|
    json.set! reservation.id do
      json.partial! 'api/reservations/reservation', reservation: reservation
    end
  end
end

json.bars do
  @reservations.each do |reservation|
    bar = reservation.bar
    json.set! bar.id do
      json.extract! bar, :id, :name, :address, :latitude, :longitude, :city_id
    end
  end
end

json.beers do
  @reservations.each do |reservation|
    beer = reservation.beer
    json.set! beer.id do
      json.extract! beer, :id, :name, :description, :price, :abv, :image_url
    end
  end
end
