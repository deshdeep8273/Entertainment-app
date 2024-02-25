import classes from "./Bookmark.module.css";
import { ReactComponent as IconBookmarkFull } from "../../assets/icon-bookmark-full.svg";
import { ReactComponent as IconBookmarkEmpty } from "../../assets/icon-bookmark-empty.svg";
import { bookmarkActions } from "../../store";

import { useDispatch } from "react-redux";

function Bookmark({
  isBookmarked,
  onBookmark,
  title,
  releaseYear,
  poster_path,
  name,
}) {
  const dispatch = useDispatch();
  console.log(isBookmarked);

  function clickHandler() {
    onBookmark();
    dispatch(
      bookmarkActions.updateContent({
        releaseYear,
        title,
        poster_path,
        name,
        isBookmarked,
      })
    );
  }

  return (
    <div onClick={clickHandler} className={classes.bookmark}>
      {isBookmarked ? (
        <IconBookmarkFull className={classes.full} />
      ) : (
        <IconBookmarkEmpty className={classes.empty} />
      )}
    </div>
  );
}

export default Bookmark;
