import {
  ThunkAction,
  configureStore,
  createSlice,
  Action,
  PayloadAction,
  combineReducers,
} from "@reduxjs/toolkit";
import { HYDRATE, MakeStore, createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export interface AuthState {
  authState: boolean;
}

const initialState = {
  authState: false,
} as AuthState;

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
    builder.addCase(HYDRATE, (state, action) => {
      return { ...state, ...action };
    });
  },
});

export const { setAuthState } = authSlice.actions;



// const makeStore = () => {
//   return configureStore({
//     reducer: {
//       [authSlice.name]: authSlice.reducer,
//     },
//     devTools: true,
//   });
// };

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore["getState"]>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   Action
// >;
//
// export const wrapper = createWrapper<AppStore>(makeStore);
