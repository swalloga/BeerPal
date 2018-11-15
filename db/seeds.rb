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

puts "Finished"
