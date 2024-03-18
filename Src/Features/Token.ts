import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TokenState {
  token: string | null;
}

const initialState: TokenState = {
  token: null,
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setUserToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    unsetUserToken: (state) => {
      state.token = null;
    },
  },
});

export const { setUserToken, unsetUserToken } = tokenSlice.actions;

export default tokenSlice.reducer;
