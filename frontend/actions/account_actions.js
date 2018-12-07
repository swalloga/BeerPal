import * as UserAPIUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
// sync actions
export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const receiveUserErrors = errors => {
  return ({
  type: RECEIVE_USER_ERRORS,
  errors
  });
};

// async actions
export const updateUser = (user, beerQty) => dispatch => {
  return UserAPIUtil.updateUser(user, beerQty)
  .then((user) => dispatch(receiveUser(user)),
  err => dispatch(receiveUserErrors(err.responseText)));
};
