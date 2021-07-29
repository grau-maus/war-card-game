import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute(props) {
  const { user } = props;

  return (
    <Route {...props}>
      {(user) ? props.children : <Redirect to="/" />}
    </Route>
  )
};

const mapStateToProps = (state) => ({
  user: state.session.user
});

export default connect(mapStateToProps, null)(ProtectedRoute);
