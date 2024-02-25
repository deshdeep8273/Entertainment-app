import classes from "./SearchBar.module.css";
import icon from "../../assets/icon-search.svg";
import { useDispatch, useSelector } from "react-redux";
import { searchingActions } from "../../store";

function SearchBar() {
  const searchingRequest = useSelector(
    (state) => state.search.searchingRequest
  );

  const dispatch = useDispatch();
  function searchHandler(e) {
    dispatch(searchingActions.updateState(e.target.value));
  }

  return (
    <section className={classes.container}>
      <div className={classes.icon}>
        <img src={icon} alt="Search icon" />
      </div>
      <div className={classes.field}>
        <input
          onChange={searchHandler}
          value={searchingRequest}
          type="text"
          placeholder="Search for movies and TV series"
        />
      </div>
    </section>
  );
}

export default SearchBar;
