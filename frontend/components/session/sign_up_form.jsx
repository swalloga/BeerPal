import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
          <li key={`error-${i}`}>
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
        <h4 className="title">Welcome to beerPal</h4>
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <div className="form-field">
              <label>Username:
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
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
            </div>
            <br/>
            <div className="form-field">
              <label>Name:
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="login-input"
                  />
              </label>
            </div>
            <br/>
            <div className="form-field">
              <label>Email Address:
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                  />
              </label>
            </div>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
            <br/>
              <p className="invite">Already have an account?
                <br/>
                <Link to="/login">Log In</Link>
              </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
