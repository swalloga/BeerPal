
export const fetchFavorites = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/favorites'
    });
};

export const createFavorite = (favorite) => {
  return $.ajax({
    method: 'POST',
    url: `/api/favorites`,
    data: { favorite }
  });
};

export const deleteFavorite = (favoriteId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/favorites/${favoriteId}`,
    data: { favoriteId }
  });
};
