json.cities do
  @cities.each do |city|
    json.set! city.id do
      json.partial! 'api/cities/city', city: city
    end
  end
end
  json.defaultCity do
    json.partial! 'api/cities/city', city: @default_city
  end
