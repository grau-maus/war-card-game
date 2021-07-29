import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LoggedOutRoute from "./components/auth/LoggedOutRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Splash from "./components/Splash";
import Home from "./components/Home";
// import { authenticate } from "./services/auth";
import { authenticate } from "./store/session";
import socket from "./socket";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  // yes it does work
  socket.emit('message', 'does this work')

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <LoggedOutRoute path="/" exact={true}>
          <Splash />
        </LoggedOutRoute>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/home" exact={true}>
          <Home />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
