import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

function NavBar(props) {
  const { user } = props;

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/single-player" exact={true} activeClassName="active">
            Single Player
          </NavLink>
        </li>
        {Boolean(user) &&
          <li>
            <LogoutButton />
          </li>
        }
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  user: state.session.user
});

export default connect(mapStateToProps, null)(NavBar);
