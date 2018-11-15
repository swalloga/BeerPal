
class Beer < ApplicationRecord
   validates :name, :description, :price, :abv, presence: true
   validates :name, uniqueness: true
   
 end
