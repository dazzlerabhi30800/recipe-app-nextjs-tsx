import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

// fetch recipe function
const appId = process.env.NEXT_PUBLIC_APP_ID?.toString();
const appKey = process.env.NEXT_PUBLIC_APP_KEY?.toString();

export const fetchRecipes = createAsyncThunk("auth/fetchRecipes", async () => {
  const data = await fetch(
    `https://api.edamam.com/api/recipes/v2?q=paneer&app_key=${appKey}&app_id=${appId}&type=public`,
  );
  const response = await data.json();
  return response;
});

export const nextPageRecipes = createAsyncThunk<any, any, any>(
  "auth/nextPageRecipes",
  async (url: string) => {
    const data = await fetch(url);
    const response = await data.json();
    return response;
  },
);

export type fetchRecipeByString = {
  searchString: string;
};

export const searchRecipes = createAsyncThunk<any, any, any>(
  "auth/searchRecipes",
  async (searchString: any) => {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?q=${searchString}&app_key=${appKey}&app_id=${appId}&type=public`,
    );
    const response = await data.json();
    return response;
  },
);

export interface AuthState {
  loading: boolean;
  recipes: any;
  searchString: string;
  nextPageLink: string | null;
  loadMore: boolean;
}

const initialState = {
  loading: false,
  recipes: [],
  searchString: "",
  nextPageLink: null,
  loadMore: false,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoadingState(state) {
      state.loading = !state.loading;
    },
    setSearchString(state, action) {
      state.searchString = action.payload;
    },
    setNextPage(state, action) {
      state.nextPageLink = action.payload;
    },
  },
  // Special reducers for hydrating the state. Special case for next-redux-wrapper
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.recipes.push(action.payload);
      state.nextPageLink = action.payload._links.next.href;
      state.loading = false;
    });
    builder.addCase(nextPageRecipes.pending, (state) => {
      state.loadMore = true;
    });
    builder.addCase(nextPageRecipes.fulfilled, (state, action) => {
      state.recipes.push(action.payload);
      state.nextPageLink = action.payload._links.next.href;
      state.loadMore = false;
    });
    builder.addCase(searchRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchRecipes.fulfilled, (state, action) => {
      state.recipes = [];
      state.recipes.push(action.payload);
      state.loading = false;
      state.searchString = "";
    });
    builder.addCase(searchRecipes.rejected, (state) => {
      state.recipes = ["No Recipe Found"];
      state.loading = false;
    });
  },
});

export const { setLoadingState, setSearchString, setNextPage } =
  authSlice.actions;

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
