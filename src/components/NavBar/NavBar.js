import Logo from "../Logo/Logo";
import Avatar from "../Avatar/Avatar";
import NavButton from "../NavButton/NavButton";
import { ReactComponent as IconHome } from "../../assets/icon-nav-home.svg";
import { ReactComponent as IconMovies } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as IconSeries } from "../../assets/icon-nav-tv-series.svg";
import { ReactComponent as IconBookmark } from "../../assets/icon-nav-bookmark.svg";

import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={classes.navigation}>
      <Logo />
      <NavButton path="/">
        <IconHome />
      </NavButton>
      <NavButton path="/movies">
        <IconMovies />
      </NavButton>
      <NavButton path="/series">
        <IconSeries />
      </NavButton>
      <NavButton path="/bookmark">
        <IconBookmark />
      </NavButton>

      <Avatar />
    </nav>
  );
}

export default NavBar;
