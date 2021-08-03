// constants
const NEW_GAME = "singlePlayer/NEW_GAME";
const FOLD_GAME = "singlePlayer/FOLD_GAME";
const DRAW_CARD = "singlePlayer/DRAW_CARD";

// actions
const newGameAction = (data) => ({
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

// thunks
export const newGame = () => async (dispatch) => {
  const response = await fetch("/api/singleplayer/", { method: 'POST' });
  if (response.ok) {
    // array of card objects
    const data = await response.json();
    dispatch(newGameAction(data));
  }
}

export const foldGame = () => async (dispatch) => {
  // TODO GIVE UP GAME
}

export const drawCard = (player) => async (dispatch) => {
  // TODO DRAW CARD FOR PLAYER
}

export const loadGame = () => async (dispatch) => {
  // TODO LOAD GAME FOR PLAYER
  console.log('in thunk')
}

// reducer
const initialState = {
  gameId: null,
  computerDeck: null,
  computerDrawnCard: null,
  playerDeck: null,
  playerDrawnCard: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      return { ...state, gameId: action.payload.id };
    default:
      return state;
  }
}
