# == Schema Information
#
# Table name: bar_beers
#
#  id         :bigint(8)        not null, primary key
#  bar_id     :integer          not null
#  beer_id    :integer          not null
#  date       :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BarBeer < ApplicationRecord
  validates :bar_id, :beer_id, :date, presence: true
  validates :bar_id, uniqueness: { scope: :date }

  belongs_to :bar
  belongs_to :beer

 end
