json.barBeers do
  @barbeers.each do |barbeer|
    json.set! barbeer.id do
      json.partial! 'api/bar_beers/bar_beer', barbeer: barbeer
    end
  end
end

json.bars do
  @barbeers.each do |barbeer|
    bar = barbeer.bar
    json.set! bar.id do
      json.extract! bar, :id, :name, :address, :latitude, :longitude, :city_id
    end
  end
end

json.beers do
  @barbeers.each do |barbeer|
    beer = barbeer.beer
    json.set! beer.id do
      json.extract! beer, :id, :name, :description, :price, :abv, :image_url
    end
  end
end
