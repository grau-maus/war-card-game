import React from "react";
import { connect } from "react-redux";
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

export default connect(mapStateToProps, null)(SinglePlayer);
