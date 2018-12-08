# BeerPal
[BeerPal](https://beer-pal.herokuapp.com/#/) is a single-page app inspired by [MealPal](https://mealpal.com/) where users can browse, search and reserve discounted happy hour beers, at most once per day. It's built with Ruby on Rails, a PostgreSQL Database, Javascript, React, and Redux.

 ## Technologies Used:
* Ruby
* Ruby on Rails
* PostgreSQL
* React
* Redux
* JavaScript
* HTML5
* CSS
* Heroku
* Webpack
* Google Maps API

 ## Features

 ### Splash Page
Before even signing up or logging in, site visitors can navigate a beautiful (and informative!) page, which includes spotlight content, a map with available deals in the selected city(which defaults to New York) and several invite forms that urge our new pal to submit their email address to learn more. Presumably, the BeerPal marketing team would pick up the baton and ensure no pal gets left behind through friendly reminder emails and special offers.

 #### Spotlight Content
 To achieve rotating spotlight content, I first check the number of deals that exist in the selected city to ensure the rotating quantity isn't greater than the existing quantity. Then I take a random sample from the existing deals to display. I set a timer to update the classes every four seconds to show one spotlight deal and hide the rest.
 ```javascript
     if (Object.values(deals).length > 0 && Object.values(deals).length < 3) {
       this.spotlightDeals = _.sampleSize(Object.values(deals));
     } else {
       this.spotlightDeals = _.sampleSize(Object.values(deals), 4);
     }

     rotateSpotlight() {
       let i;
       let x = document.getElementsByClassName("carousel-item");
       for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
       }
       slideIndex++;
       if (slideIndex > x.length) {slideIndex = 1;}
       x[slideIndex-1].style.display = "flex";
       this.interval = setInterval(this.rotateSpotlight, 4000);
     }
 ```


 ### Happy Hour Page
* When a user does sign up or log in, they are redirected to the main page of the app: HAPPY HOURS. This is where they can see all available happy hour deals in their selected city, which they can adjust with a filter bar drop down.
* When the city dropdown is changed, our user will see the deals and map component update accordingly!
* The map component (which is reused on the splash page) can be hidden or shown by clicking a button to its left.
* Users also have the ability to search for a beer or bar using input fields at the top of the happy hour index page.

 #### Deals
Once our user has browsed the available happy hour deals and decided on a deal they want to purchase, they can just hover over that deal to reveal some more details and a "Reserve" button. If they click it, we first validate that the current user has at least one beer left on their account.
```ruby
    def ensure_account_balance
      user = User.find(user_id)
      raise "Invalid entry" unless bar_beer
      if user.beer_allowance < 1
        errors.add(:account_balance, "you don't have any beers left!")
      end
    end
```
 If they do, that deal gets added to their reservations and the option to reserve deals will disappear until the following day or they cancel the reservation for that day. We also update their account and reduce the `beer_allowance` for that user in the database. When a reservation is created, a new entry is added to the `reservations` table including the deal id number and the user's id.

 ```ruby
     def update_beer_allowance(val)
       self.beer_allowance += val
       self.save
     end
 ```

![deal-index](https://github.com/swalloga/BeerPal/blob/master/app/assets/images/deal-index.png)

 #### Favorites
 Conveniently located on the hover detail of each deal is a heart icon, allowing users to "favorite" a bar. Once the heart is clicked, that bar gets added to the favorites list, which is private to each user. It can be found in the dropdown menu. On the favorites index page or the happy hour page, users can remove bars if they decide they don't belong on the favorites list by simply clicking the heart icon again.

 ### My Account Page
* Each user has their own account page, which is only visible to that user.
* Information about the account is displayed, including username, account balance and an option to "pick up another six pack", which would ideally charge the card on file $30.
* If the "buy more" button is clicked, we add 6 beers to the beer allowance on the account and update the account page to reflect the updated amount.
```ruby
    def update
      @user = User.find_by(id: params[:id])
      @user.update_beer_allowance(params[:beerQty].to_i)
      render :show
    end
```
* Each account page also includes a list of reservations(past and present) including useful info like the bar name, beer name and date.

![my-account](https://github.com/swalloga/BeerPal/blob/master/app/assets/images/my-account.png)

 ## Future direction
* Update search based on the map boundaries.
* Filter deals by favorite bars.
* Rake task to seed daily deals.
* Mobile responsive design.
