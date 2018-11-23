# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  name            :string           not null
#  beer_allowance  :integer          default(0), not null
#  preferred_city  :string           default("New York"), not null
#  company_name    :string
#  image_url       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :name, :beer_allowance, :password_digest, :session_token, presence: true
  validates :username, uniqueness:true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :reservations

  def find_reservation_by_date(date)
    date = Reservation.first.bar_beer.date
    Reservation.joins(:bar_beer).where(bar_beers:{date: date}).find_by({user_id: id})
  end

  def get_res_info
    Reservation.all.includes(:bar, :beer).where(user_id: id)
  end

  def self.find_by_credentials(username,password)
    @user = User.find_by(username: username)
    if @user && @user.is_password?(password)
      @user
    else
      nil
    end
  end

  def reset_session_token!
    self.update!(session_token: SecureRandom::urlsafe_base64)
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
