# BeerPal
[BeerPal](https://beer-pal.herokuapp.com/#/) is a single-page app inspired by [MealPal](https://mealpal.com/) where users can browse, search and reserve discounted happy hour beers, at most once per day. It uses Ruby on Rails, a PostgreSQL Database, Javascript, React, and Redux.

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

 ### Happy Hour Page
* When a user does sign up or log in, they are redirected to the main page of the app: HAPPY HOURS. This is where they can see all available happy hour deals in their selected city, which they can adjust with a filter bar drop down.
* When the city dropdown is changed, our user will see the deals and map component update accordingly!
* Users also have the ability to search for a beer or bar using input fields at the top of the happy hour index page.

 #### Deals
Once our user has browsed the available happy hour deals and decided on a deal they want to purchase, they can just hover over that deal to reveal some more details and a "Reserve" button. If they click it, that deal gets added to their reservation index and the option to reserve deals will disappear until the following day or they cancel the reservation for that day.

![deal-index](https://github.com/swalloga/BeerPal/blob/master/app/assets/images/deal-index.png)


 #### Favorites
 Conveniently located on the hover detail of each deal is a heart icon, allowing users to "favorite" a bar. Once the heart is clicked, that bar gets added to the favorites list, which is private to each user. It can be found in the dropdown menu. On the favorites index page, users can remove bars if they decide they don't belong on the favorites list by simply clicking the heart icon again.

 ### My Account Page
* Each user has their own account page, which is only visible to that user.
* Information about the account is displayed, including username, # of beers left on the account and an option to "pick up another six pack", which would ideally charge the card on file $30 and add 6 beers to the beer allowance on the account.
* Each account page also includes a list of reservations(past and present) including useful info like the bar name, beer name and date.

 ## Upcoming Features
* Search based on the map boundaries.
* Filter deals by favorite bars.
* Mobile responsive design.
