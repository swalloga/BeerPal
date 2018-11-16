
export const fetchAllBeers = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/beers'
    });
};

export const fetchBeer = (id) => {
  return $.ajax({
      method: 'GET',
      url: `/api/beers/${id}`
    });
};
