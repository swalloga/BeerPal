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


  def self.find_by_date(date = "")
    return BarBeer.all if date == ""
    all = BarBeer.all
    formatted_date = Date.new(date)
    all.select{ |barbeer| barbeer.date == formatted_date }
  end

 end
