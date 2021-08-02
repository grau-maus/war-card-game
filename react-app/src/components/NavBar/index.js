import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/session";

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
  const { user, logout } = props;
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.title}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            War
          </Typography>
          <Button className="active" onClick={() => history.push("/")}>
            Home
          </Button>
          <Button className="active" onClick={() => history.push("/login")}>
            Log in
          </Button>
          <Button className="active" onClick={() => history.push("/sign-up")}>
            Sign Up
          </Button>
          <Button className="active" onClick={() => history.push("/users")}>
            Users
          </Button>
          <Button className="active" onClick={() => history.push("/single-player")}>
            Single Player
          </Button>
          {Boolean(user) && (
            <Button className="active" onClick={() => logout()}>
              Log out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.session.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
