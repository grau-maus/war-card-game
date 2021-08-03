import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { newGame } from "../../../store/singlePlayer";

function Menu(props) {
  const { newGame } = props;
  const history = useHistory();
  const handleNewGame = () => {
    newGame();
  };
  const handleLoadGame = () => {
    history.push("/load-game");
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
  }
});

export default connect(null, mapDispatchToProps)(Menu);
