import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router-dom';

function LoggedOutRoute(props) {
  const { user } = props;

  return (
    <Route {...props}>
      {(user) ? <Redirect to="/home" /> : props.children}
    </Route>
  )
}

const mapStateToProps = (state) => ({
  user: state.session.user
});

export default connect(mapStateToProps, null)(LoggedOutRoute);
