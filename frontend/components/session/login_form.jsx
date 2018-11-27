import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="error-messages" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h4 className="title">Welcome back</h4>
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <div className="form-field">
              <label>Username:
                <br/>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  />
              </label>
            </div>
            <br/>
            <div className="form-field">
              <label>Password:
                <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  />
              </label>
            </div>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
            <br/>
            <p className="invite">Don't have an account yet?
              <br/>
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
