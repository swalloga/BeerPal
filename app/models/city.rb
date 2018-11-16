# == Schema Information
#
# Table name: cities
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  latitude   :float
#  longitude  :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class City < ApplicationRecord
  validates :name, presence: true
  has_many :bars,
    foreign_key: :city_id,
    class_name: :City
end
