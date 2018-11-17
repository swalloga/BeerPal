#COMMENTED OUT AND REPLACED WITH PARTIAL
# @barbeers.each do |barbeer|
#   json.set! barbeer.id do
#     json.bar barbeer.bar, :name, :address, :latitude, :longitude
#     json.beer barbeer.beer, :name, :description, :price, :abv, :image_url
#   end
# end
# QUESTION: should i get rid of the bar and beer keys and consolidate?
json.partial! 'api/bar_beers/bar_beer', collection: @barbeers, as: :barbeer
