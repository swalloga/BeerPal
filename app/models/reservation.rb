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
  # validate :ensure_unique_reservation

  belongs_to :user
  belongs_to :bar_beer,
    primary_key: :id,
    foreign_key: :bar_beer_id,
    class_name: :BarBeer

  has_one :bar,
    through: :bar_beer,
    source: :bar
  has_one :beer,
    through: :bar_beer,
    source: :beer
  # 
  # def ensure_unique_reservation
  #   user = User.find(user_id)
  #   raise "Invalid entry" unless bar_beer
  #   if user.find_reservation_by_date(bar_beer.date)
  #     errors.add(:unique_reservations, "limit one deal per day")
  #   end
  # end

end
