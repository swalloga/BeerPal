export const fetchAllDeals = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/bar_beers'
    });
};

export const fetchDeal = (id) => {
  return $.ajax({
      method: 'GET',
      url: `/api/bar_beers/${id}`
    });
};

export const fetchDealsByBeer = (beerId) => {
  return $.ajax({
      method: 'GET',
      url: `/api/beers/${beerId}/bar_beers`
    });
};

export const fetchDealByBar = (barId) =>{
    return $.ajax({
        method: 'GET',
        url: `/api/bars/${barId}/bar_beers`
      });
  };
