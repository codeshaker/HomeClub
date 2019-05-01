import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "./../../redux/actions/authActions";

class LoginInPage extends Component {
  state = {
    phoneNumber: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Log In</h5>
          <div className="input-field">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(LoginInPage);
