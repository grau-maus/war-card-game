import React from "react";
import { connect } from "react-redux";
import Menu from "./Menu";
import Game from "./Game";

function SinglePlayer(props) {
  const { gameId } = props;

  return (
    <>
      {Boolean(gameId) ? <Game game={props} /> : <Menu />}
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.session.user,
  computerDrawnCard: state.singlePlayer.computerDrawnCard,
  playerDrawnCard: state.singlePlayer.playerDrawnCard,
  gameId: state.singlePlayer.gameId
});

export default connect(mapStateToProps, null)(SinglePlayer);
