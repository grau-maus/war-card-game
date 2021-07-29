import React from "react";
import { connect } from "react-redux";

function SinglePlayer(props) {
  return (
    <>
      <h1>single player, yay</h1>
    </>
  );
}

export default connect()(SinglePlayer);
