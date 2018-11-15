class Bar < ApplicationRecord
  validates :name, :address, :city_id presence: true
  has_many :bar_beers,
    foreign_key: :bar_id,
    class_name: :BarBeers

   # belongs_to :city,
   #  foreign_key: :city_id,
   #  primary_key: :id,
   #  class_name: :City

# QUESTION: do i have to set the default lat long in migration or is after after_initialize
   after_initialize :ensure_lat_long

   def ensure_lat_long
     self.latitude ||= 74.0060
     self.longitude ||= 40.7128
   end

# TODO: do i need a find by name or id method?

 end
