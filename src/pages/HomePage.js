import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import ContentGrid from "../components/ContentGrid/ContentGrid";
import TrendLine from "../components/TrendLine/TrendLine";

function HomePage() {
  // console.log("HOME PAGE");
  const content = useSelector((state) => state.content.items);
  const TrendingTvShows = useSelector((state) => state.trending.items);
  //console.log(TrendingTvShows);
  const recommendation = useSelector((state) => state.recommendation.items);
  //console.log(recommendation);

  const searchingRequest = useSelector(
    (state) => state.search.searchingRequest
  );
  const searchResult = useSelector((state) => state.search.searchResults);
  //console.log(searchResult);

  const isSearching = useSelector((state) => state.search.isSearching);
  //console.log(isSearching);
  // console.log("Content: ", content);

  const searchResults = searchResult.map((item) => {
    return <Card key={item.id} data={item} />;
  });

  const trending = content.map((item) => {
    return <Card key={item.id} data={item} isTrending={true} />;
  });
  const Tvshows = TrendingTvShows.map((item) => {
    return <Card key={item.id} data={item} isTrending={true} />;
  });

  const recommendations = recommendation.map((item) => {
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
      {!isSearching && <TrendLine content={trending} shows={Tvshows} />}
      {!isSearching && (
        <ContentGrid title="Recommended for you" content={recommendations} />
      )}
    </>
  );
}

export default HomePage;
