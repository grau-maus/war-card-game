// constants
const NEW_GAME = "singlePlayer/NEW_GAME";
const FOLD_GAME = "singlePlayer/FOLD_GAME";
const DRAW_CARD = "singlePlayer/DRAW_CARD";

// actions
const newGameAction = (decks) => ({
  type: NEW_GAME,
  payload: decks
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
  // TODO NEW GAME STUFF
}

export const foldGame = () => async (dispatch) => {
  // TODO GIVE UP GAME
}

export const drawCard = (player) => async (dispatch) => {
  // TODO DRAW CARD FOR PLAYER
}

// reducer
const initialState = {
  computerDeck: null,
  computerDrawnCard: null,
  playerDeck: null,
  playerDrawnCard: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
