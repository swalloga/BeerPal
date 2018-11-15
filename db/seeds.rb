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

Liz = User.create!({username:"LizLemon", name:"Liz", password:"starwars", email:"liz@gmail.com", preferred_city:"New York", beer_allowance:1})
Tracey = User.create!({username:"TracyJ", name:"Tracey", password:"starwars", email:"TracyJ@gmail.com", preferred_city:"New York", beer_allowance:2})
Jim = User.create!({username:"Jimothy", name:"Jim", password:"starwars", email:"Jimothy@gmail.com", preferred_city:"Scranton", beer_allowance:3})
Michael = User.create!({username:"PrisonMike", name:"Michael", password:"starwars", email:"PrisonMike@gmail.com", preferred_city:"Scranton", beer_allowance:4})
Dwight = User.create!({username:"Beetsrbest", name:"Dwight", password:"starwars", email:"Beetsrbest@gmail.com", preferred_city:"Scranton", beer_allowance:5})
Leslie = User.create!({username:"LeslieK", name:"Leslie", password:"starwars", email:"LeslieK@gmail.com", preferred_city:"Chicago", beer_allowance:6})
Sebastian = User.create!({username:"Lilsebastian", name:"Sebastian", password:"starwars", email:"Lilsebastian@gmail.com", preferred_city:"Chicago", beer_allowance:7})
Ron = User.create!({username:"RonSwanson", name:"Ron", password:"starwars", email:"RonSwanson@gmail.com", preferred_city:"Chicago", beer_allowance:8})
Mindy = User.create!({username:"MindyK", name:"Mindy", password:"starwars", email:"MindyK@gmail.com", preferred_city:"New York", beer_allowance:1})
Morgan = User.create!({username:"Morgan", name:"Morgan", password:"starwars", email:"Morgan@gmail.com", preferred_city:"New York", beer_allowance:2})
Tamra = User.create!({username:"Tamra", name:"Tamra", password:"starwars", email:"Tamra@gmail.com", preferred_city:"New York", beer_allowance:3})
Sarah = User.create!({username:"Sarah", name:"Sarah", password:"starwars", email:"Sarah@gmail.com", preferred_city:"New York", beer_allowance:4})
Drake = User.create!({username:"Drake", name:"Drake", password:"starwars", email:"Drake@gmail.com", preferred_city:"New York", beer_allowance:5})
Justin = User.create!({username:"Justin", name:"Justin", password:"starwars", email:"Justin@gmail.com", preferred_city:"New York", beer_allowance:6})
Karen = User.create!({username:"Karen", name:"Karen", password:"starwars", email:"Karen@gmail.com", preferred_city:"Scranton", beer_allowance:7})
Pam = User.create!({username:"Pam", name:"Pam", password:"starwars", email:"Pam@gmail.com", preferred_city:"Scranton", beer_allowance:8})
Angela = User.create!({username:"Angela", name:"Angela", password:"starwars", email:"Angela@gmail.com", preferred_city:"Scranton", beer_allowance:1})
Bandit = User.create!({username:"Bandit", name:"Bandit", password:"starwars", email:"Bandit@gmail.com", preferred_city:"Scranton", beer_allowance:2})
Demo = User.create!({username:"Demo", name:"Demo", password:"password", email:"Demo", preferred_city:"New York", beer_allowance:0})

puts "users successful"

City.destroy_all

puts "Creating Cities..."

newyork =  City.create! ({id: 1, name: "New York" , latitude:74.006, longitude:40.7128})
chicago =  City.create! ({id: 2, name: "Chicago" , latitude:75.006, longitude:41.7128})
scranton =  City.create! ({id: 3, name: "Scranton" , latitude:76.006, longitude:42.7128})
sanfran =  City.create! ({id: 4, name: "San Francisco" , latitude:77.006, longitude:43.7128})
houston =  City.create! ({id: 5, name: "Houston" , latitude:78.006, longitude:44.7128})
dallas =  City.create! ({id: 6, name: "Dallas" , latitude:79.006, longitude:45.7128})
philly =  City.create! ({id: 7, name: "Philadelphia" , latitude:80.006, longitude:46.7128})
seattle =  City.create! ({id: 8, name: "Seattle" , latitude:81.006, longitude:47.7128})

puts "cities successful"

Bar.destroy_all

puts "Creating Bars..."

applebees = Bar.create!({name:"Applebee's" ,address:"22 W 38th Street" ,latitude:74.006, longitude:40.7128, city_id:1})
fridays = Bar.create!({name:"Friday's" ,address:"23 W 38th Street" ,latitude:75.008, longitude:41.7122, city_id:1})
australian = Bar.create!({name:"The Australian" ,address:"24 W 38th Street" ,latitude:76.006, longitude:42.7128, city_id:1})
deweys = Bar.create!({name:"deweys" ,address:"25 W 38th Street" ,latitude:77.006, longitude:43.7128, city_id:2})
rumplestiltskin = Bar.create!({name:"rumplestiltskin" ,address:"26 W 38th Street" ,latitude:78.006, longitude:44.7128, city_id:3})
crows = Bar.create!({name:"crows" ,address:"27 W 38th Street" ,latitude:79.006, longitude:45.7128, city_id:4})
bobs = Bar.create!({name:"bobs" ,address:"28 W 38th Street" ,latitude:80.006, longitude:46.7128, city_id:5})
pjs = Bar.create!({name:"pjs" ,address:"29 W 38th Street" ,latitude:81.006, longitude:47.7128, city_id:6})
blanket = Bar.create!({name:"blanket" ,address:"30 W 38th Street" ,latitude:82.006, longitude:48.7128, city_id:7})
iron = Bar.create!({name:"iron" ,address:"31 W 38th Street" ,latitude:83.006, longitude:49.7128, city_id:8})

puts "bars successful"

Beer.destroy_all

puts "Creating Beers..."

guiness = Beer.create! ({name: "Guiness", description: "Stout", price: 8, abv: 4.2})
stella = Beer.create! ({name: "Stella", description: "Stout", price: 8, abv: 4.2})
budweiser = Beer.create! ({name: "Budweiser", description: "Stout", price: 8, abv: 4.2})
heinken = Beer.create! ({name: "Heinken", description: "Stout", price: 8, abv: 3})
brooklyn = Beer.create! ({name: "Brooklyn Lager", description: "Stout", price: 8, abv: 4})
corona = Beer.create! ({name: "Corona", description: "Stout", price: 8, abv: 5})
bluemoon = Beer.create! ({name: "Bluemoon", description: "Stout", price: 8, abv: 6})
modelo = Beer.create! ({name: "Modelo", description: "Stout", price: 8, abv: 5})
pbr = Beer.create! ({name: "Pbr", description: "Stout", price: 8, abv: 5})
fat_tire = Beer.create! ({name: "Fat Tire", description: "Stout", price: 8, abv: 5})
founders = Beer.create! ({name: "Founders", description: "Stout", price: 8, abv: 4.2})

puts "Beers successful"

puts "Finished"
