import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";

//console.log("STORE");
//create slice of global store
export const API_KEY = "d62fd8046c31d61026bd9c50ab82251d";
export const API_URL = "https://api.themoviedb.org/3";

const contentSlice = createSlice({
  name: "content",
  initialState: { items: [], isLoading: true },
  reducers: {
    setIsLoading(state) {
      state.isLoading = true;
    },
    updateContent(state, action) {
      // console.log("update state");
      state.items = action.payload;
      state.isLoading = false;
    },
    bookmarkItem(state, action) {
      console.log(action);
      const index = state.items.findIndex((item) => item.id === action.payload);
      // state.items[index].isBookmarked = !state.items[index].isBookmarked;
      console.log(index);
    },
  },
});
const TrendingSlice = createSlice({
  name: "trending",
  initialState: { items: [], isLoading: true },
  reducers: {
    setIsLoading(state) {
      state.isLoading = true;
    },
    updateContent(state, action) {
      // console.log("update state");
      state.items = action.payload;
      state.isLoading = false;
    },
    // bookmarkItem(state, action) {
    //   console.log(action);
    //   const index = state.items.findIndex((item) => item.id === action.payload);
    //   //state.items[index].isBookmarked = !state.items[index].isBookmarked;
    // },
  },
});
const TvshowsSlice = createSlice({
  name: "Tvshows",
  initialState: { items: [], isLoading: true },
  reducers: {
    setIsLoading(state) {
      state.isLoading = true;
    },
    updateContent(state, action) {
      // console.log("update state");
      state.items = action.payload;
      state.isLoading = false;
    },
    // bookmarkItem(state, action) {
    //   // console.log(action);
    //   const index = state.items.findIndex(
    //     (item) => item.title === action.payload
    //   );
    //   // state.items[index].isBookmarked = !state.items[index].isBookmarked;
    // },
  },
});

const recommendationSlice = createSlice({
  name: "recommendation",
  initialState: { items: [], isLoading: true },
  reducers: {
    setIsLoading(state) {
      state.isLoading = true;
    },
    updateContent(state, action) {
      // console.log("update state");
      state.items = action.payload;
      state.isLoading = false;
    },
    // bookmarkItem(state, action) {
    //   // console.log(action);
    //   const index = state.items.findIndex(
    //     (item) => item.title === action.payload
    //   );
    //   //  state.items[index].isBookmarked = !state.items[index].isBookmarked;
    // },
  },
});
const movieSlice = createSlice({
  name: "movie",
  initialState: { items: [], isLoading: true },
  reducers: {
    setIsLoading(state) {
      state.isLoading = true;
    },
    updateContent(state, action) {
      // console.log("update state");
      state.items = action.payload;
      state.isLoading = false;
    },
    // bookmarkItem(state, action) {
    //   // console.log(action);
    //   const index = state.items.findIndex(
    //     (item) => item.title === action.payload
    //   );
    //   state.items[index].isBookmarked = !state.items[index].isBookmarked;
    // },
  },
});

const searchingSlice = createSlice({
  name: "search",
  initialState: { searchingRequest: "", isSearching: false, searchResults: [] },

  reducers: {
    updateState(state, action) {
      // if (action.payload.trim() === "") {
      //   state.isSearching = false;
      // } else {
      //   state.isSearching = true;
      // }
      state.searchingRequest = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchData.fulfilled, (state, action) => {
        state.searchResults = action.payload;
        state.isSearching = action.payload.length > 0;
      })
      .addCase(searchData.pending, (state) => {
        // You can handle loading state if needed
      })
      .addCase(searchData.rejected, (state, action) => {
        console.error("Error fetching search data:", action.error);
      });
  },
});

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: { bookmarkresult: [] },
  reducers: {
    updateContent(state, action) {
      // state.bookmarkresult = [...state.bookmarkresult, ...action.payload];
      // console.log(state.bookmarkresult);
      if (Array.isArray(action.payload) && action.payload.length > 0) {
        // If it's not empty, append the items to the existing ones
        state.bookmarkresult = [...state.bookmarkresult, ...action.payload];
      } else if (!Array.isArray(action.payload)) {
        // If it's a single item, append it to the existing ones
        state.bookmarkresult = [...state.bookmarkresult, action.payload];
      }
    },
  },
});

//action creator for async code

function fetchContent() {
  return async (dispatch) => {
    dispatch(contentActions.setIsLoading());
    console.log(contentActions);
    const response = await fetch(
      `${API_URL}/trending/movie/week?api_key=${API_KEY}`
    );

    //console.log("getting is over");
    if (!response.ok) {
      throw new Error("Fetching data error");
    }
    const data = await response.json();
    //  console.log(data.results);
    dispatch(contentActions.updateContent(data.results || [])); // empty array to avoid errorrs in case of empty data
  };
}
function TrendingTvShows() {
  return async (dispatch) => {
    dispatch(trendingActions.setIsLoading());
    //console.log("getting data");
    const response = await fetch(
      `${API_URL}/trending/tv/week?api_key=${API_KEY}`
    );

    //console.log("getting is over");
    if (!response.ok) {
      throw new Error("Fetching data error");
    }
    const data = await response.json();
    //console.log(data.results);
    dispatch(trendingActions.updateContent(data.results || [])); // empty array to avoid errorrs in case of empty data
  };
}
function TvShows() {
  return async (dispatch) => {
    dispatch(TvshowsActions.setIsLoading());
    //console.log("getting data");
    const response = await fetch(`${API_URL}/tv/popular?api_key=${API_KEY}`);

    //console.log("getting is over");
    if (!response.ok) {
      throw new Error("Fetching data error");
    }
    const data = await response.json();
    //console.log(data.results);
    dispatch(TvshowsActions.updateContent(data.results || [])); // empty array to avoid errorrs in case of empty data
  };
}
function fetchrecommendationData() {
  return async (dispatch) => {
    dispatch(recommendationActions.setIsLoading());
    // console.log("getting data");
    const response = await fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_original_language=hi&vote_average.gte=7`
    );

    //console.log("getting is over");
    if (!response.ok) {
      throw new Error("Fetching data error");
    }
    const data = await response.json();
    // console.log(data.results);
    dispatch(recommendationActions.updateContent(data.results || [])); // empty array to avoid errorrs in case of empty data
  };
}

function moviesData() {
  return async (dispatch) => {
    dispatch(moviesActions.setIsLoading());
    //console.log("getting data");
    const response = await fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_original_language=hi&vote_average.lte=7`
    );

    //console.log("getting is over");
    if (!response.ok) {
      throw new Error("Fetching data error");
    }
    const data = await response.json();
    // console.log(data.results);
    dispatch(moviesActions.updateContent(data.results || [])); // empty array to avoid errorrs in case of empty data
  };
}

export const searchData = createAsyncThunk(
  "search/fetchData",
  async (_, { getState }) => {
    const { searchingRequest } = getState().search;
    console.log("Search query:", searchingRequest);

    const response = await fetch(
      `${API_URL}/search/multi?api_key=${API_KEY}&query=${searchingRequest}`
    );

    if (!response.ok) {
      throw new Error("Fetching data error");
    }

    const data = await response.json();
    // console.log(data);
    return data.results || [];
  }
);

const contentActions = contentSlice.actions; // includes all reducers from contentSlice
const trendingActions = TrendingSlice.actions;
const searchingActions = searchingSlice.actions;
const recommendationActions = recommendationSlice.actions;
const moviesActions = movieSlice.actions;
const TvshowsActions = TvshowsSlice.actions;
const bookmarkActions = bookmarkSlice.actions;

const bookmarkReducer = bookmarkSlice.reducer;
//console.log(bookmarkReducer);

const contentReducer = contentSlice.reducer;
const trendingReducer = TrendingSlice.reducer;
const searchingReducer = searchingSlice.reducer;
const recommendationReducer = recommendationSlice.reducer;
const movieReducer = movieSlice.reducer;
const TvshowsReducer = TvshowsSlice.reducer;

// in case of one slice:
// const store = configureStore({ reducer: contentReducer });
// useSelector(state=>state.items)

const store = configureStore({
  reducer: {
    content: contentReducer,
    search: searchingReducer,
    recommendation: recommendationReducer,
    movie: movieReducer,
    trending: trendingReducer,
    Tvshows: TvshowsReducer,
    bookmark: bookmarkReducer,
  },
});

export default store;
export {
  trendingActions,
  contentActions,
  searchingActions,
  recommendationActions,
  moviesActions,
  bookmarkActions,
  fetchContent,
  moviesData,
  fetchrecommendationData,
  TrendingTvShows,
  TvShows,
  TvshowsActions,
}; // to get acsess for dispatching
