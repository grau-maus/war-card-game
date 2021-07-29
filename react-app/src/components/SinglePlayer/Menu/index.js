import React from "react";
import { connect } from "react-redux";
import { newGame } from "../../../store/singlePlayer";

function Menu(props) {
  const { newGame } = props;
  const handleNewGame = () => {
    newGame();
  };

  return (
    <>
      <h1>--Title--</h1>
      <h3>Score</h3>
      <button type="button" onClick={handleNewGame}>New Game</button>
      <button>Load Game</button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  newGame: () => {
    dispatch(newGame());
  }
});

export default connect(null, mapDispatchToProps)(Menu);
