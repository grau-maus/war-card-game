import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import LogoutButton from "../auth/LogoutButton";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#9147ff"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar(props) {
  const { user } = props;
  const classes = useStyles();

  return (
    <div className={classes.title}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
          War
        </Typography>
        <ul>
            <Button to="/" exact={true} activeClassName="active">
              Home
            </Button>
            <Button href="/login" exact={true} activeClassName="active">
              Login
            </Button>
            <Button href="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </Button>
            <Button href="/users" exact={true} activeClassName="active">
              Users
            </Button>
            <Button href="/single-player" exact={true} activeClassName="active">
              Single Player
            </Button>
          {Boolean(user) && (
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.session.user,
});

export default connect(mapStateToProps, null)(NavBar);
