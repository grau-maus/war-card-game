import React from 'react';
import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';

export default function LoggedOutRoute(props) {
  const user = useSelector(state => state.session.user)
  return (
    <Route {...props}>
      {(user) ? <Redirect to="/home" /> : props.children}
    </Route>
  )
}
