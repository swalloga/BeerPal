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

# TODO: fix this method
  # def self.find_by_date(date = "2019-01-01")
  #   all = BarBeer.all
  #   # debugger
  #   formatted_date = Date.new(date)
  #   all.select{ |barbeer| barbeer.date == date }
  # end

 end
