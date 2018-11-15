
class Beer < ApplicationRecord
   validates :name, :description, :price, :abv, presence: true
   validates :name, uniqueness: true
   # TODO: do i need a find by name or id method?
   has_many :bar_beers,
     foreign_key: :beer_id,
     class_name: :BarBeers
 end
