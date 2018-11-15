class BarBeers < ApplicationRecord
  validates :bar_id, :beer_id, :date presence: true
# QUESTION: how to add uniqueness contraint on combined index??
  belongs_to :bar
  belongs_to :beer


 end
