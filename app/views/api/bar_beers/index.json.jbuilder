@barbeers.each do |barbeer|
  json.set! barbeer.id do
    json.extract! barbeer, :bar_id, :beer_id
    json.bar barbeer.bar, :name, :address, :latitude, :longitude
    json.beer barbeer.beer, :name, :description, :price, :abv, :image_url
  end
end

#COMMENTED OUT AND REPLACED WITH above
# QUESTION: should i get rid of the bar and beer keys and consolidate?
# json.partial! 'api/bar_beers/bar_beer', collection: @barbeers, as: :barbeer
