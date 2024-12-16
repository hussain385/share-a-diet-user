import {
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { RootState } from "@/store";

interface UserState {
  accessToken?: string;
}

const initialState: UserState = {};

const userSlice = createSlice({
  name: "user",
  reducerPath: "user",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setToken } = userSlice.actions;

export const { getMyUser } = {
  getMyUser: createSelector(
    [(state: RootState) => state.user],
    (user) => user.user,
  ),
};

export default userSlice;
