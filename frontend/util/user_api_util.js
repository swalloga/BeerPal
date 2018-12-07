export const updateUser = (user, beerQty) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `api/users/${user.id}`,
      data: {
        user,
        beerQty
       }
    })
  );
};
