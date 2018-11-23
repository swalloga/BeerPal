json.extract! reservation, :id, :bar_beer_id, :user_id
json.bar_id reservation.bar.id
json.beer_id reservation.beer.id
json.date reservation.bar_beer.date
