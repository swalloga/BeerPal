import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS ="CLEAR_ERRORS";
export const UPDATE_TEMP_EMAIL ="UPDATE_TEMP_EMAIL";

export const receiveCurrentUser = ({ reservationForToday, user }) => {
  return {
  type: RECEIVE_CURRENT_USER,
  currentUser: user,
  reservationForToday
  };
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const updateTempEmail = (email) => ({
  type: UPDATE_TEMP_EMAIL,
  email
});

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user).then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err.responseJSON)));
  };
};

export const logout = () => {
  return (dispatch) => {
    return APIUtil.logout().then(() => dispatch(logoutCurrentUser()));
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)));
  };
};

export const demoSignIn = () => {
  return (dispatch) => {
    let demoUser = {username:"Demo", password: "starwars"};
    return APIUtil.login(demoUser).then((user) => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)));
  };
};

export const getCurrentUserInfo = (currentUserId) => {
  return (dispatch) => {
    return APIUtil.getCurrentUserInfo(currentUserId)
    .then((user) => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)));
  };
};
