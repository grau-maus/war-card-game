// constants
const NEW_GAME = "singlePlayer/NEW_GAME";
const FOLD_GAME = "singlePlayer/FOLD_GAME";
const DRAW_CARD = "singlePlayer/DRAW_CARD";
const LOAD_ALL_GAMES = "singlePlayer/LOAD_ALL_GAMES";
const CLEAR_SAVED_GAMES = "singlePlayer/CLEAR_SAVED_GAMES";
const CLEAR_CURRENT_GAME = "singlePlayer/CLEAR_CURRENT_GAME";

// actions
export const newGameAction = (data) => ({
  type: NEW_GAME,
  payload: data
});

const foldGameAction = () => ({
  type: FOLD_GAME
});

const drawCardAction = (player, card) => ({
  type: DRAW_CARD,
  payload: { player, card }
});

const loadAllGamesAction = (games) => ({
  type: LOAD_ALL_GAMES,
  payload: games
});

export const clearSavedGamesAction = () => ({
  type: CLEAR_SAVED_GAMES
});

export const clearCurrentGameAction = () => ({
  type: CLEAR_CURRENT_GAME
});

// thunks
export const newGame = () => async (dispatch) => {
  const response = await fetch("/api/singleplayer/newgame/", { method: "POST" });
  if (response.ok) {
    const data = await response.json();
    dispatch(newGameAction(data));
  }
}

export const foldGame = () => async (dispatch) => {
  // TODO GIVE UP GAME
}

export const drawCard = (gameId) => async (dispatch) => {
  const response = await fetch("/api/singleplayer/draw/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ game_id: gameId })
  });
  if (response.ok) {
    const data = await response.json();
    console.log('got data', data);
  }
}

export const loadAllGames = () => async (dispatch) => {
  const response = await fetch("/api/singleplayer/loadgame/", { method: "POST" });
  if (response.ok) {
    const loadedGames = await response.json();
    dispatch(loadAllGamesAction(loadedGames));
  }
}

// reducer
const initialState = {
  gameId: null,
  computerDrawnCard: null,
  playerDrawnCard: null,
  savedGames: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      return { ...state, gameId: action.payload.id };
    case LOAD_ALL_GAMES:
      return { ...state, savedGames: action.payload };
    case CLEAR_SAVED_GAMES:
      return { ...state, savedGames: null };
    case CLEAR_CURRENT_GAME:
      return { ...state, gameId: null };
    default:
      return state;
  }
}
