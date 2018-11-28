# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Destroying all entries..."
User.destroy_all

puts "Creating Users..."

Liz = User.create!({username:"LizLemon",  id: 1, name:"Liz", password:"starwars", email:"liz@gmail.com", preferred_city:"New York", beer_allowance:1})
Tracey = User.create!({username:"TracyJ",  id: 2, name:"Tracey", password:"starwars", email:"TracyJ@gmail.com", preferred_city:"New York", beer_allowance:2})
Jim = User.create!({username:"Jimothy",  id: 3, name:"Jim", password:"starwars", email:"Jimothy@gmail.com", preferred_city:"Scranton", beer_allowance:3})
Michael = User.create!({username:"PrisonMike",  id: 4, name:"Michael", password:"starwars", email:"PrisonMike@gmail.com", preferred_city:"Scranton", beer_allowance:4})
Dwight = User.create!({username:"Beetsrbest",  id: 5, name:"Dwight", password:"starwars", email:"Beetsrbest@gmail.com", preferred_city:"Scranton", beer_allowance:5})
Leslie = User.create!({username:"LeslieK",  id: 6, name:"Leslie", password:"starwars", email:"LeslieK@gmail.com", preferred_city:"Chicago", beer_allowance:6})
Sebastian = User.create!({username:"Lilsebastian",  id: 7, name:"Sebastian", password:"starwars", email:"Lilsebastian@gmail.com", preferred_city:"Chicago", beer_allowance:7})
Ron = User.create!({username:"RonSwanson",  id: 8, name:"Ron", password:"starwars", email:"RonSwanson@gmail.com", preferred_city:"Chicago", beer_allowance:8})
Mindy = User.create!({username:"MindyK",  id: 9, name:"Mindy", password:"starwars", email:"MindyK@gmail.com", preferred_city:"New York", beer_allowance:1})
Morgan = User.create!({username:"Morgan",  id: 10, name:"Morgan", password:"starwars", email:"Morgan@gmail.com", preferred_city:"New York", beer_allowance:2})
Tamra = User.create!({username:"Tamra",  id: 11, name:"Tamra", password:"starwars", email:"Tamra@gmail.com", preferred_city:"New York", beer_allowance:3})
Sarah = User.create!({username:"Sarah",  id: 12, name:"Sarah", password:"starwars", email:"Sarah@gmail.com", preferred_city:"New York", beer_allowance:4})
Drake = User.create!({username:"Drake",  id: 13, name:"Drake", password:"starwars", email:"Drake@gmail.com", preferred_city:"New York", beer_allowance:5})
Justin = User.create!({username:"Justin",  id: 14, name:"Justin", password:"starwars", email:"Justin@gmail.com", preferred_city:"New York", beer_allowance:6})
Karen = User.create!({username:"Karen",  id: 15, name:"Karen", password:"starwars", email:"Karen@gmail.com", preferred_city:"Scranton", beer_allowance:7})
Pam = User.create!({username:"Pam",  id: 16, name:"Pam", password:"starwars", email:"Pam@gmail.com", preferred_city:"Scranton", beer_allowance:8})
Angela = User.create!({username:"Angela",  id: 17, name:"Angela", password:"starwars", email:"Angela@gmail.com", preferred_city:"Scranton", beer_allowance:1})
Bandit = User.create!({username:"Bandit",  id: 18, name:"Bandit", password:"starwars", email:"Bandit@gmail.com", preferred_city:"Scranton", beer_allowance:2})
puts "users successful"

City.destroy_all

puts "Creating Cities..."

newyork =  City.create! ({id: 1, name: "New York" , latitude:40.7514, longitude:-73.9839})
chicago =  City.create! ({id: 2, name: "Chicago" , latitude:41.8781, longitude:-87.6298})
scranton =  City.create! ({id: 3, name: "Scranton" , latitude:41.409, longitude:-75.6624})
sanfran =  City.create! ({id: 4, name: "San Francisco" , latitude:37.7749, longitude:-122.4194})

puts "cities successful"

Bar.destroy_all

puts "Creating Bars..."

barcade = Bar.create!({id:1,name:"Barcade" ,address:"148 W 24th St" ,latitude:40.744202, longitude:-73.994423, city_id:1})
breslin = Bar.create!({id:2,name:"The Breslin" ,address:"16 W 29th St" ,latitude:40.74578, longitude:-73.98814, city_id:1})
australian = Bar.create!({id:3,name:"The Australian" ,address:"20 W 38th St" ,latitude:40.75121, longitude:-73.98392, city_id:1})
deweys = Bar.create!({id:4,name:"Dewey's Pub" ,address:"135 W 30th St" ,latitude:40.7482, longitude:-73.99121, city_id:1})
cindy = Bar.create!({id:5,name:"Cindy's" ,address:"12 S Michigan Ave" ,latitude:41.881649, longitude:-87.625023, city_id:2})
elephant = Bar.create!({id:6,name:"Elephant & Castle" ,address:"111 W Adams St" ,latitude:41.87934, longitude:-87.63094, city_id:2})
comedy = Bar.create!({id:7,name:"The Comedy Bar" ,address:"500 N LaSalle D" ,latitude:41.9122, longitude:-87.63309, city_id:2})
emporium = Bar.create!({id:8,name:"Emporium" ,address:"1366 N Milwaukee Ave" ,latitude:41.906658, longitude:-87.67186, city_id:2})
vella = Bar.create!({id:9,name:"Vella Wine Bar" ,address:"1480 2nd Ave" ,latitude:40.77203, longitude:-73.95566, city_id:2})
blindtiger = Bar.create!({id:10,name:"Blind Tiger" ,address:"281 Bleecker St" ,latitude:40.73189, longitude:-74.00315, city_id:1})
stout = Bar.create!({id:11,name:"Stout FIDI" ,address:"90 John St" ,latitude:40.70788, longitude:-74.00659, city_id:1})
deadrabbit = Bar.create!({id:12,name:"The Dead Rabbit Grocery and Grog" ,address:"30 Water St" ,latitude:40.70788, longitude:-74.00659, city_id:1})
twothirtyfifth = Bar.create!({id:13,name:"230 Fifth Rooftop Bar" ,address:"30 Water St" ,latitude:40.743938, longitude:-73.987984, city_id:1})
employeesonly = Bar.create!({id:14,name:"Employees Only" ,address:"510 Hudson St" ,latitude:40.73344, longitude:-74.006073, city_id:1})
japas = Bar.create!({id:15,name:"Japas 38" ,address:"9 E 38th St" ,latitude:40.7508, longitude:-73.98157, city_id:1})

puts "bars successful"

Beer.destroy_all

puts "Creating Beers..."

guinness = Beer.create! ({id: 1, name: "Guinness", description: "Stout", price: 8, abv: 4.2, image_url: "guinness.png"})
stella = Beer.create! ({id: 2, name: "Stella", description: "Lager", price: 8, abv: 4.2, image_url: "stella.png"})
budweiser = Beer.create! ({id: 3, name: "Budweiser", description: "Lager", price: 8, abv: 4.2, image_url: "budweiser.jpg"})
heinken = Beer.create! ({id: 4, name: "Heinken", description: "Lager", price: 8, abv: 3, image_url: "heineken.jpg"})
brooklyn = Beer.create! ({id: 5, name: "Brooklyn Lager", description: "Lager", price: 8, abv: 4, image_url: "brooklyn.jpg"})
corona = Beer.create! ({id: 6, name: "Corona", description: "Lager", price: 8, abv: 5, image_url: "corona.jpg"})
bluemoon = Beer.create! ({id: 7, name: "Bluemoon", description: "Wheat", price: 8, abv: 5.4, image_url: "bluemoon.jpg"})
modelo = Beer.create! ({id: 8, name: "Modelo", description: "Lager", price: 8, abv: 5, image_url: "modelo.jpg"})
pbr = Beer.create! ({id: 9, name: "Pbr", description: "Pilsner", price: 8, abv: 5, image_url: "pbr.jpg"})
fat_tire = Beer.create! ({id: 10, name: "Fat Tire", description: "Lager", price: 8, abv: 5, image_url: "fattire.jpg"})
founders = Beer.create! ({id: 11, name: "Founders", description: "IPA", price: 8, abv: 4.2, image_url: "founders.jpg"})
budlight = Beer.create! ({id: 12, name: "Budlight", description: "Lager", price: 8, abv: 4.2, image_url: "budlight.jpg"})

puts "Beers successful"

BarBeer.destroy_all

puts "Creating bar_beers..."
BarBeer.create!({id: 1, bar_id:1, beer_id:1, date: "2019-01-01"})
BarBeer.create!({id: 2, bar_id:2, beer_id:2, date: "2019-01-01"})
BarBeer.create!({id: 3, bar_id:3, beer_id:3, date: "2019-01-01"})
BarBeer.create!({id: 4, bar_id:4, beer_id:4, date: "2019-01-01"})
BarBeer.create!({id: 5, bar_id:5, beer_id:5, date: "2019-01-01"})
BarBeer.create!({id: 6, bar_id:6, beer_id:6, date: "2019-01-01"})
BarBeer.create!({id: 7, bar_id:7, beer_id:7, date: "2019-01-01"})
BarBeer.create!({id: 8, bar_id:8, beer_id:8, date: "2019-01-01"})
BarBeer.create!({id: 9, bar_id:9, beer_id:1, date: "2019-01-01"})
BarBeer.create!({id: 10, bar_id:10, beer_id:2, date: "2019-01-01"})
BarBeer.create!({id: 11, bar_id:11, beer_id:3, date: "2019-01-01"})
BarBeer.create!({id: 12, bar_id:12, beer_id:4, date: "2019-01-01"})
BarBeer.create!({id: 13, bar_id:13, beer_id:5, date: "2019-01-01"})
BarBeer.create!({id: 14, bar_id:14, beer_id:6, date: "2019-01-01"})
BarBeer.create!({id: 15, bar_id:15, beer_id:7, date: "2019-01-01"})
BarBeer.create!({id: 16, bar_id:1, beer_id:1, date: "2018-01-01"})
BarBeer.create!({id: 17, bar_id:2, beer_id:2, date: "2018-04-01"})
BarBeer.create!({id: 18, bar_id:3, beer_id:3, date: "2018-08-01"})
BarBeer.create!({id: 19, bar_id:4, beer_id:4, date: "2019-10-01"})
puts "Bar_beers successful!"

# puts "Deleting all Reservations"

# Reservation.destroy_all
#
# puts "Creating Reservations..."
#
# Reservation.create!({user_id:1, bar_beer_id:1})
# Reservation.create!({user_id:2, bar_beer_id:2})
# Reservation.create!({user_id:3, bar_beer_id:3})
# Reservation.create!({user_id:4, bar_beer_id:4})
# Reservation.create!({user_id:5, bar_beer_id:5})
# Reservation.create!({user_id:6, bar_beer_id:6})
# Reservation.create!({user_id:7, bar_beer_id:7})
# Reservation.create!({user_id:8, bar_beer_id:8})
# Reservation.create!({user_id:9, bar_beer_id:9})
# Reservation.create!({user_id:10, bar_beer_id:10})
# Reservation.create!({user_id:12, bar_beer_id:10})
# Reservation.create!({user_id:12, bar_beer_id:16})
# Reservation.create!({user_id:12, bar_beer_id:17})
# Reservation.create!({user_id:12, bar_beer_id:18})
# Reservation.create!({user_id:12, bar_beer_id:19})
#
# puts "Reservations successful"

puts "Finished"
