import classes from "./Card.module.css";
import Bookmark from "../Bookmark/Bookmark";
import PlayButton from "../PlayButton/PlayButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as IconTV } from "../../assets/icon-category-tv.svg";
import { ReactComponent as IconMovies } from "../../assets/icon-category-movie.svg";

function Card({ isTrending, data, isBookmarked }) {
  const { title, name, poster_path, year, release_date, first_air_date } = data;
  console.log(isBookmarked);
  const releaseYear = new Date(release_date || first_air_date).getFullYear();
  // const bookmark = useSelector((state) => state.bookmark);

  const [bookmarked, setBookmarked] = useState(false);
  // const [bookmarkId, setBookmarkId] = useState("");

  //  const dispatch = useDispatch();

  const cardClass = isTrending
    ? `${classes.card} ${classes.trending}`
    : classes.card;

  function bookmarkHandler() {
    setBookmarked((prevState) => !prevState);
    console.log(bookmarked);
  }

  return (
    <div className={cardClass}>
      <div className={classes.container}>
        <div className={classes.thumbnail}>
          <img
            src={`  https://image.tmdb.org/t/p/w500/${poster_path}`}
            // srcSet={imgSrcSet}
            // sizes="(max-width: 700px) 45vw, (max-width: 1100px) 25vw, 20vw"
            alt={title}
          />
          <PlayButton />
          <Bookmark
            isBookmarked={bookmarked}
            onBookmark={bookmarkHandler}
            title={title}
            releaseYear={releaseYear}
            poster_path={poster_path}
            name={data.name}
          />
        </div>

        <div className={classes.info}>
          <span>{year}</span>
          <span>•</span>
          <span>
            {title && <IconMovies />}
            {name && <IconTV />}
          </span>
          <span>{title ? "Movie" : " Tv Show"}</span>
          <span>•</span>
          {!releaseYear ? "2019" : releaseYear}
          <h3>{title || name}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
