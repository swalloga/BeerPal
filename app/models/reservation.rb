# == Schema Information
#
# Table name: reservations
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  bar_beer_id :integer          not null
#  time        :time
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Reservation < ApplicationRecord
  validates :bar_beer_id, :user_id, presence: true

  belongs_to :user
  belongs_to :bar_beer

  attr_reader :date
  
  def set_date
    this.date = this.bar_beer.date
  end
end
