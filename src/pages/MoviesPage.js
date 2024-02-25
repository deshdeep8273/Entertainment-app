import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import ContentGrid from "../components/ContentGrid/ContentGrid";

function MoviesPage() {
  // console.log("MOVIES PAGE");
  const MoviesData = useSelector((state) => state.movie.items);
  //console.log(MoviesData);
  const searchingRequest = useSelector(
    (state) => state.search.searchingRequest
  );
  // console.log(searchingRequest);
  const isSearching = useSelector((state) => state.search.isSearching);

  const searchResult = useSelector((state) => state.search.searchResults);
  const searchResults = searchResult
    .filter((item) => item.media_type === "movie")
    .map((item) => {
      return <Card key={item.id} data={item} />;
    });
  // console.log(searchResults.length);

  const movies = MoviesData.map((item) => {
    return <Card key={item.id} data={item} />;
  });

  return (
    <>
      {isSearching && (
        <ContentGrid
          title={`Found ${searchResults.length} results for '${searchingRequest}'`}
          content={searchResults}
        />
      )}
      {!isSearching && <ContentGrid title="Movies" content={movies} />}
    </>
  );
}

export default MoviesPage;
