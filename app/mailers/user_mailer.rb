class UserMailer < ApplicationMailer
  default from: 'no-reply@beerpal.com'

  def welcome_email
    @user = params[:user]
    @url_personal  = 'http://www.sarahwalloga.com'
    mail(to: @user.email, subject: 'Welcome to BeerPal!')
  end
end
