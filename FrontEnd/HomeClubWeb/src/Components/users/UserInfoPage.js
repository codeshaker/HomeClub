import React from "react";
import { connect } from "react-redux";
import * as userActions from "../../redux/actions/userActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import UserList from "./UserList";

class UserInfoPage extends React.Component {
  componentDidMount() {
    this.props.loadUsers().catch(error => {
      alert("Loading Users Failed" + error);
    });
  }

  render() {
    return (
      <>
        <h2>Users</h2>
        <UserList users={this.props.users} />
      </>
    );
  }
}

UserInfoPage.propTypes = {
  users: PropTypes.array.isRequired,
  loadUsers: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: bindActionCreators(userActions.loadUsers, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoPage);
