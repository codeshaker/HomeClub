import React from "react";
import PropTypes from "prop-types";

const UserList = ({ users }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Balance</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => {
        return (
          <tr key={user.basicinfo.id}>
            <td>
              <h3>{user.basicinfo.name}</h3>
            </td>
            <td>{user.basicinfo.location}</td>
            <td>{user.paymentInfo.balance}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
