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

export const fetchDealsByBarSearch = (barName, city_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/bars/:id/bar_beers`,
    data: {
      name: barName,
      city_id,
    }
  });
};
