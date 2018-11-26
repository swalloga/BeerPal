# == Schema Information
#
# Table name: favorites
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  bar_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Favorite < ApplicationRecord
  validates :user_id, :bar_id, presence: true
  validates :bar_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :bar
  
end
