import { useEffect, useRef } from "react";
import classes from "./TrendLine.module.css";

function TrendLine({ content, shows }) {
  const trending = useRef();

  //onWheel event works in passive mode in React, thus can't prevent default behaviour
  //can be solved using useEffect and useRef for adding regular event listener
  //trending.current - DOM element
  useEffect(() => {
    trending.current.addEventListener("wheel", scrollHandler, {
      passive: false,
    });
  }, []);

  function scrollHandler(e) {
    e.preventDefault();
    // const line = e.target.closest("#trendLine"); // select whole div
    trending.current.scrollLeft += e.deltaY; //deltaY because we rotate mousewheel down or up
  }

  return (
    <>
      <div>
        <h1>Trending Movies</h1>
        <div className={classes.scroll}>
          <div ref={trending} id="trendLine" className={classes.line}>
            {content}
          </div>
        </div>
      </div>
      <div>
        <h1>Trending Tvshows</h1>
        <div className={classes.scroll}>
          <div ref={trending} id="trendLine" className={classes.line}>
            {shows}
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendLine;
