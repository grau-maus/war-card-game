import React from "react";
import { connect } from "react-redux";
import { drawCard, foldGame, newGame } from "../../store/singlePlayer";
import Menu from "./Menu";
import Game from "./Game";

function SinglePlayer(props) {
  const { gameStarted } = props;

  return (
    <>
      {Boolean(gameStarted) ? <Game props={props} /> : <Menu />}
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
