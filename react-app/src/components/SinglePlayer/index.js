import React from "react";
import { connect } from "react-redux";
import Menu from "./Menu";
import Game from "./Game";

function SinglePlayer(props) {
  const { gameId } = props;

  return (
    <>
      {Boolean(gameId) ? <Game props={props} /> : <Menu />}
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.session.user,
  computerDeck: state.singlePlayer.computerDeck,
  computerDrawnCard: state.singlePlayer.computerDrawnCard,
  playerDeck: state.singlePlayer.playerDeck,
  playerDrawnCard: state.singlePlayer.playerDrawnCard,
  gameId: state.singlePlayer.gameId
});

export default connect(mapStateToProps, null)(SinglePlayer);
