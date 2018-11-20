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
  has_one :city,
    through: :bar,
    source: :city


  def self.find_current_deals(date, city_id)
    city_id ||= City.first.id
    return BarBeer.joins(:bar).where(bars:{city_id: city_id}).includes(:bar, :beer) unless date
    formatted_date = date.to_date
    BarBeer.joins(:bar).where(bars:{city_id: city_id},date:formatted_date).includes(:bar, :beer)
    # QUESTION: is the bar at the end of the above statement extra?
  end

 end
