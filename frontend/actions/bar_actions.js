import * as BarAPIUtil from '../util/bar_api_util';
export const RECEIVE_ALL_BARS = 'RECEIVE_ALL_BARS';
export const RECEIVE_BAR = 'RECEIVE_BAR';
export const RECEIVE_BAR_ERRORS = 'RECEIVE_BAR_ERRORS';

// sync actions
export const receiveBars = bars => ({
  type: RECEIVE_ALL_BARS,
  bars,
});

export const receiveBar = bar => ({
  type: RECEIVE_BAR,
  bar,
});

export const receiveBarErrors = errors => {
  return ({
  type: RECEIVE_BAR_ERRORS,
  errors
  });
};

// async actions
    // TODO: come back and fix errors. right now they're very ugly
export const fetchAllBars = () => dispatch => {
  return BarAPIUtil.fetchAllBars().then((bars) => dispatch(receiveBars(bars)),
  err => dispatch(receiveBarErrors(err.responseJSON)));
};

export const fetchBar = (id) => dispatch => {
  return BarAPIUtil.fetchBar(id).then((bar) => dispatch(receiveBar(bar)),
  err => {
    return dispatch(receiveBarErrors(err.responseText));
  });
};
