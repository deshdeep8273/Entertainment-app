import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import ContentGrid from "../components/ContentGrid/ContentGrid";

function SeriesPage() {
  // console.log("SERIES PAGE");
  const content = useSelector((state) => state.Tvshows.items);
  const searchingRequest = useSelector(
    (state) => state.search.searchingRequest
  );
  const searchResult = useSelector((state) => state.search.searchResults);
  const isSearching = useSelector((state) => state.search.isSearching);

  const searchResults = searchResult
    .filter((item) => item.media_type === "tv")
    .map((item) => {
      return <Card key={item.id} data={item} />;
    });

  const series = content.map((item) => {
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
      {!isSearching && <ContentGrid title="TV Series" content={series} />}
    </>
  );
}

export default SeriesPage;
