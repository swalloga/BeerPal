export const fetchAllBarBeers = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/bar_beers'
    });
};

export const fetchBarBeer = (id) => {
  return $.ajax({
      method: 'GET',
      url: `/api/bar_beers/${id}`
    });
};

export const fetchBarBeersByBeer = (beerId) => {
  return $.ajax({
      method: 'GET',
      url: `/api/beers/${beerId}/bar_beers`
    });
};

export const fetchBarBeerByBar = (barId) =>{
    return $.ajax({
        method: 'GET',
        url: `/api/bars/${barId}/bar_beers`
      });
  };

  // export const fetchBarBeersByDate = (date) =>{
  //     return $.ajax({
  //         method: 'GET',
  //         url: `/api/bars/bar_beers`
  //       });
  //   };
