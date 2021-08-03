import React from "react";
import { connect } from "react-redux";
import { clearCurrentGameAction, drawCard, foldGame, newGame } from "../../../store/singlePlayer";

function Game(props) {
  const { game, computerDeck, computerDrawnCard,
    playerDeck, playerDrawnCard, newGame, foldGame,
    drawCard, saveGame } = props;
  const { user } = game;

  return (
    <>
      <h2>{"<"}computer profile image{">"}</h2>
      <h1>computer</h1>
      <h2>picture of a deck</h2>
      <h2>drawn card</h2>
      <h1>-------------------</h1>
      <h2>drawn card</h2>
      <h2>picture of a deck</h2>
      <h1>{user.username}</h1>
      <h2>{"<"}user profile image{">"}</h2>
      <button>draw</button>
      <button>fold</button>
      <button type="button" onClick={() => saveGame()}>save game</button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  newGame: () => {
    dispatch(newGame());
  },
  foldGame: () => {
    dispatch(foldGame());
  },
  drawCard: (player) => {
    dispatch(drawCard(player));
  },
  saveGame: () => {
    dispatch(clearCurrentGameAction());
  }
});

export default connect(null, mapDispatchToProps)(Game);
