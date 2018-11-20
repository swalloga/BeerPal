export const fetchDeals = (date, city_id) => {
  return $.ajax({
      method: 'GET',
      url: '/api/bar_beers',
      data: {
        date,
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
