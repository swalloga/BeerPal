class City < ApplicationRecord
  validates :name, presence: true
  has_many :bars,
    foreign_key: :city_id,
    class_name: :City
    # QUESTION: do i need a findby method here?
end
