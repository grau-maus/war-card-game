import React from "react";
import { connect } from "react-redux";
import { drawCard, foldGame, newGame } from "../../store/singlePlayer";
import Menu from "./Menu";

function SinglePlayer(props) {
  const { user, computerDeck, computerDrawnCard,
    playerDeck, playerDrawnCard, newGame, foldGame,
    drawCard, gameStarted } = props;

  return (
    <>
      {Boolean(!gameStarted) &&
        <Menu />
      }
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
  user: state.session.user,
  computerDeck: state.singlePlayer.computerDeck,
  computerDrawnCard: state.singlePlayer.computerDrawnCard,
  playerDeck: state.singlePlayer.playerDeck,
  playerDrawnCard: state.singlePlayer.playerDrawnCard,
  gameStarted: state.singlePlayer.gameStarted
});

const mapDispatchToProps = (dispatch) => ({
  newGame: () => {
    dispatch(newGame());
  },
  foldGame: () => {
    dispatch(foldGame());
  },
  drawCard: (player) => {
    dispatch(drawCard(player));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePlayer);
