import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, receiveErrors} from '../../actions/session_actions';
import SignupForm from './sign_up_form';

const mapStateToProps = ({ errors, ui }) => {
  let email = ui.currentEmail || '';
  return {
    errors: errors.session,
    formType: 'sign up',
    navLink: <Link to="/login">log in instead</Link>,
    email: email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
