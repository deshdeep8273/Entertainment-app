import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import ContentGrid from "../components/ContentGrid/ContentGrid";

function BookmarkPage() {
  // console.log("BOOKMARK PAGE");

  const bookmark = useSelector((state) => state.bookmark.bookmarkresult);
  console.log(bookmark.isBookmarked);
  const searchingRequest = useSelector(
    (state) => state.search.searchingRequest
  );
  const isSearching = useSelector((state) => state.search.isSearching);

  const searchResults = bookmark.map((item) => {
    return <Card key={item.id} data={item} isBookmarked={true} />;
  });

  const bookmarkedMovies = bookmark
    .filter((item) => item.title)
    .map((item) => {
      return <Card key={item.id} data={item} is={false} />;
    });

  let bookmarkedMoviesContent = bookmarkedMovies;
  if (bookmarkedMovies.length === 0)
    bookmarkedMoviesContent = <p>You don't have bookmarked movies</p>;

  const bookmarkedSeries = bookmark
    .filter((item) => item.name)
    .map((item) => {
      return <Card key={item.id} data={item} />;
    });

  let bookmarkedSeriesContent = bookmarkedSeries;
  if (bookmarkedSeries.length === 0)
    bookmarkedSeriesContent = <p>You don't have bookmarked TV series</p>;

  return (
    <>
      {isSearching && (
        <ContentGrid
          title={`Found ${searchResults.length} results for '${searchingRequest}'`}
          content={searchResults}
        />
      )}
      {!isSearching && (
        <ContentGrid
          title="Bookmarked Movies"
          content={bookmarkedMoviesContent}
        />
      )}
      {!isSearching && (
        <ContentGrid
          title="Bookmarked TV Series"
          content={bookmarkedSeriesContent}
        />
      )}
    </>
  );
}

export default BookmarkPage;
