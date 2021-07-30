import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp } from '../../store/session';
import Button from "@material-ui/core/Button";
import CustomInput from "./CustomInput.js";


const SignUpForm = (props) => {
  const { user, signUp } = props;
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await signUp(username, email, password);
      if (data.errors) {
        setErrors(data.errors);
      } else {
        history.push("/");
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label>User Name</label>
        <CustomInput
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></CustomInput>
      </div>
      <div>
        <label>Email</label>
        <CustomInput
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        />
      </div>
      <div>
        <label>Password</label>
        <CustomInput
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        />
      </div>
      <div>
        <label>Repeat Password</label>
        <CustomInput
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        />
      </div>
      <Button type="submit" variant="contained">Sign Up</Button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  user: state.session.user
});

const mapDispatchToProps = (dispatch) => ({
  signUp: async (username, email, password) => {
    return await dispatch(signUp(username, email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
