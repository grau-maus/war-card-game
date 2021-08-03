import React from "react";
import { connect } from "react-redux";
import { newGame, loadGame } from "../../../store/singlePlayer";

function Menu(props) {
  const { newGame, loadGame } = props;
  const handleNewGame = () => {
    newGame();
  };
  const handleLoadGame = () => {
    loadGame();
  };

  return (
    <>
      <h1>--Title--</h1>
      <h3>Score</h3>
      <button type="button" onClick={handleNewGame}>New Game</button>
      <button type="button" onClick={handleLoadGame}>Load Game</button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  newGame: () => {
    dispatch(newGame());
  },
  loadGame: () => {
    dispatch(loadGame());
  }
});

export default connect(null, mapDispatchToProps)(Menu);
