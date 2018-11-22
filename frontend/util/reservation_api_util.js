
export const fetchReservations = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/reservations'
    });
};

export const fetchReservation = (id) => {
  return $.ajax({
      method: 'GET',
      url: `/api/reservations/${id}`
    });
};

export const createReservation = (reservation) => {
  return $.ajax({
    method: 'POST',
    url: `/api/reservations`,
    data: { reservation }
  });
};

export const updateReservation = (reservation) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/reservations/${reservation.id}`,
    data: { reservation }
  });
};

export const deleteReservation = (reservationId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reservations/${reservationId}`,
  });
};
