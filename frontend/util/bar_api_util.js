export const fetchAllBars = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/bars'
    });
};

export const fetchBar = (id) => {
  return $.ajax({
      method: 'GET',
      url: `/api/bars/${id}`
    });
};
