# == Schema Information
#
# Table name: beers
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  description :string           not null
#  price       :float            not null
#  abv         :float            not null
#  image_url   :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#


class Beer < ApplicationRecord
   validates :name, :description, :price, :abv, presence: true
   validates :name, uniqueness: true
   # TODO: do i need a find by name or id method?
   has_many :bar_beers,
     foreign_key: :beer_id,
     class_name: :BarBeers
 end
