import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { newGameAction, loadAllGames, clearSavedGamesAction } from "../../../store/singlePlayer";

function LoadGame(props) {
  const { savedGames, loadGame, loadAllGames, clearSavedGames } = props;
  const history = useHistory();
  const [selectedGame, setSelectedGame] = useState(0);

  useEffect(() => {
    loadAllGames();

    return () => {
      clearSavedGames();
    };
  }, [loadAllGames, clearSavedGames]);

  const handleGoBack = () => {
    history.push("/single-player");
  };

  const handleLoadGame = () => {
    if (Boolean(selectedGame)) {
      loadGame({ id: selectedGame });
      history.push("/single-player");
    }
  };
  return (
    <>
      {Boolean(savedGames) &&
        savedGames.map((game, idx) => (
          <>
            <div key={idx} onClick={() => setSelectedGame(game.id)}>
              {`Game: ${game.id} // Started at: ${game.createdAt}`}
            </div>
          </>
        ))
      }
      <button type="button" onClick={handleGoBack}>Menu</button>
      {Boolean(selectedGame) &&
        <button type="button" onClick={handleLoadGame}>{`Load Game ${selectedGame}`}</button>
      }
    </>
  );
}

const mapStateToProps = (state) => ({
  savedGames: state.singlePlayer.savedGames
});

const mapDispatchToProps = (dispatch) => ({
  loadGame: (data) => {
    dispatch(newGameAction(data));
  },
  loadAllGames: () => {
    dispatch(loadAllGames());
  },
  clearSavedGames: () => {
    dispatch(clearSavedGamesAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadGame)
