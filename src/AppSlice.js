import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currGame: null,
  gameData: {},
  showInstruction: false,
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrGame: (state, { payload }) => {
      state.currGame = payload;
      state.showInstruction = true;
    },
    resetCurrGame: (state) => {
      state.currGame = null;
      state.gameData = {};
    },
    setCurrGameData: (state, { payload }) => {
      state.gameData = payload;
    },
    setCurrGameSpecificData: (state, { payload }) => {
      const { fieldName, newVal } = payload;
      const newGameData = { ...state.gameData, [fieldName]: newVal };
      state.gameData = newGameData;
    },
    resetCurrGameData: (state) => {
      state.gameData = {};
    },
    setShowInstruction: (state, { payload }) => {
      state.showInstruction = payload;
    },
  },
});

export const {
  setCurrGame,
  resetCurrGame,
  setCurrGameData,
  resetCurrGameData,
  setCurrGameSpecificData,
  setShowInstruction,
} = AppSlice.actions;

export default AppSlice.reducer;
