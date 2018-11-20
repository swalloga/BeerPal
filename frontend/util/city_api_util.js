export const fetchAllCities = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/cities'
    });
};

export const fetchCity = (id) => {
  return $.ajax({
      method: 'GET',
      url: `/api/cities/${id}`
    });
};

// export const setCurrentCity = (currentCityId) => {
//   return $.ajax({
//     method: 'POST',
//     url: ``,
//     data: { currentCityId }
//   });
// };
