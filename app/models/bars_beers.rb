class BarBeers < ApplicationRecord
  validates :bar_id, :beer_id, :date presence: true
  validates :bar_id, uniqueness: { scope: :date }

  belongs_to :bar
  belongs_to :beer


 end
