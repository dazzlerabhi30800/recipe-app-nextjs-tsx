import {
  ThunkAction,
  configureStore,
  createSlice,
  Action,
} from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

export interface AuthState {
  authState: boolean;
}

const initialState: AuthState = {
  authState: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState(state) {
      state.authState = !state.authState;
    },
  },

  // Special reducers for hydrating the state. Special case for next-redux-wrapper
  extraReducers: (builder) => {
    builder.addDefaultCase((state, action) => {
      return {
        ...state,
        // ...action.payload.authState,
      }
    })
  },
});

export const { setAuthState } = authSlice.actions;

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
