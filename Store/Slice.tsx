import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { TypedUseSelectorHook, useSelector } from "react-redux";



// fetch recipe function
export const fetchRecipes = createAsyncThunk(
  "content/fetchRecipes",
  async () => {
    const data = await fetch("https://api.edamam.com/api/recipes/v2?q=meat&app_key=ef5add9c1af6afdbd7191fd1ff8bbd6d&app_id=e4ba6739&type=public");
    const response = await data.json();
    return response;
  }
)
export interface AuthState {
  loading: boolean;
  recipes: Array<any>
}


const initialState = {
  loading: false,
  recipes: []
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoadingState(state) {
      state.loading = !state.loading;
    },
  },
  // Special reducers for hydrating the state. Special case for next-redux-wrapper
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return { ...state, ...action };
    });
    builder.addCase(fetchRecipes.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.recipes.push(action.payload);
      state.loading = false;
    })
  },
});

export const { setLoadingState } = authSlice.actions;



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
