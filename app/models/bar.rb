# == Schema Information
#
# Table name: bars
#
#  id        :bigint(8)        not null, primary key
#  name      :string           not null
#  address   :string           not null
#  latitude  :float            not null
#  longitude :float            not null
#  city_id   :integer          not null
#

class Bar < ApplicationRecord
  validates :name, :address, :city_id, presence: true
  has_many :bar_beers,
    foreign_key: :bar_id,
    class_name: :BarBeer

   belongs_to :city,
    foreign_key: :city_id,
    class_name: :City

   after_initialize :ensure_lat_long

   def ensure_lat_long
     self.latitude ||= 74.0060
     self.longitude ||= 40.7128
   end

   def beerofday(date)
     deal = self.bar_beers.find_by(date: date)
     beer = Beer.find_by(id: deal.beer_id)
     return Beer.first unless beer
     beer
   end
 end
