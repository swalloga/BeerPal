class Bar < ApplicationRecord
   validates :name, :address, :city_id presence: true

   # belongs_to :city,
   #  foreign_key: :city_id,
   #  primary_key: :id,
   #  class_name: :City

   after_initialize :ensure_lat_long

   def ensure_lat_long
     self.latitude ||= 74.0060
     self.longitude ||= 40.7128
   end



 end
