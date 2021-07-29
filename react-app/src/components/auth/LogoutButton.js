import React from "react";
import { connect } from "react-redux";
import { logout } from "../../store/session";

function LogoutButton(props) {
  const { user, logout } = props;
  const onLogout = async (e) => {
    await logout();
  };

  return user ? <button onClick={onLogout}>Logout</button> : null;
};

const mapStateToProps = (state) => ({
  user: state.session.user
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
