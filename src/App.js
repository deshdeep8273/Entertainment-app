import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import BookmarkPage from "./pages/BookmarkPage";
import { useEffect } from "react";
import {
  TrendingTvShows,
  TvShows,
  fetchContent,
  fetchrecommendationData,
  moviesData,
  searchData,
} from "./store/index";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // console.log("APP");
  // const content = useSelector((state) => state.content.items);
  const searchingRequest = useSelector(
    (state) => state.search.searchingRequest
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("Initial");
    dispatch(fetchContent());
    dispatch(fetchrecommendationData());
    dispatch(moviesData()); // get content from a server in initial stage
    dispatch(searchData());
    dispatch(TrendingTvShows());
    dispatch(TvShows());
    // dispatch(bookmarkActions.updateContent());
    return () => console.log("clean up");
  }, [dispatch, searchingRequest]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
          <Route index="true" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="bookmark" element={<BookmarkPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
