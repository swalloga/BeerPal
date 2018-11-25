export const fetchDeals = (city_id) => {
  return $.ajax({
      method: 'GET',
      url: '/api/bar_beers',
      data: {
        city_id,
      }
    });
};

export const fetchDeal = (id) => {
  return $.ajax({
      method: 'GET',
      url: `/api/bar_beers/${id}`
    });
};

// QUESTION: if i want to search by beer name in the filter bar, where do i convert text to a beer or bar id?
export const fetchDealsByBeerSearch = (beerName, city_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/beers/:id/bar_beers`,
    data: {
      name: beerName,
      city_id,
    }
  });
};
