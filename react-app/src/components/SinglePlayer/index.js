import React from "react";
import { connect } from "react-redux";

function SinglePlayer(props) {
  const { user } = props;

  return (
    <>
      <h2>{"<"}computer profile image{">"}</h2>
      <h1>computer</h1>
      <h2>deck</h2>
      <h2>drawn card</h2>
      <h1>-------------------</h1>
      <h2>drawn card</h2>
      <h2>deck</h2>
      <h1>{user.username}</h1>
      <h2>{"<"}user profile image{">"}</h2>
      <button>draw</button>
      <button>fold</button>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.session.user
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayer);
