import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currGame: null,
  gameData: {},
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrGame: (state, { payload }) => {
      state.currGame = payload;
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
  },
});

export const {
  setCurrGame,
  resetCurrGame,
  setCurrGameData,
  resetCurrGameData,
  setCurrGameSpecificData,
} = AppSlice.actions;

export default AppSlice.reducer;
