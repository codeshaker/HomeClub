import React, { Component } from "react";
import { connect } from "react-redux";
import { CreateUser } from "./../../redux/actions/userActions";

class SignInPage extends Component {
  state = {
    name: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.CreateUser(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id="phone" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    CreateUser: user => dispatch(CreateUser(user))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignInPage);
