import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../../styles/theme.model';
import { RootState } from '../root.store';

export interface ThemeState {
  value: Theme;
}

const initialState: ThemeState = {
  value: Theme.light,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state: ThemeState, action: PayloadAction<Theme>) => {
      state.value = action.payload;
    },
  },
});

export const selectTheme = (state: RootState) => state.theme.value;

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
