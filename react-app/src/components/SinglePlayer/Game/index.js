import React from "react";
import { connect } from "react-redux";
import { clearCurrentGameAction, drawCard, foldGame, newGame } from "../../../store/singlePlayer";

function Game(props) {
  const { game, computerDrawnCard, playerDrawnCard,
    newGame, foldGame, drawCard, saveGame } = props;
  const { user, gameId } = game;

  const handleDrawCard = ({ gameId, userId }) => {
    drawCard({ gameId, userId });
    setTimeout(() => {
      drawCard({ gameId, userId: null });
    }, 1000);
  };

  return (
    <>
      <h1>{gameId}</h1>
      <h2>{"<"}computer profile image{">"}</h2>
      <h1>computer</h1>
      <h2>picture of a deck</h2>
      <h2>{computerDrawnCard}</h2>
      <h1>-------------------</h1>
      <h2>{playerDrawnCard}</h2>
      <h2>picture of a deck</h2>
      <h1>{user.username}</h1>
      <h2>{"<"}user profile image{">"}</h2>
      <button type="button" onClick={() => handleDrawCard({ gameId, userId: user.id })}>draw</button>
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
  drawCard: (gameId) => {
    dispatch(drawCard(gameId));
  },
  saveGame: () => {
    dispatch(clearCurrentGameAction());
  }
});

export default connect(null, mapDispatchToProps)(Game);
