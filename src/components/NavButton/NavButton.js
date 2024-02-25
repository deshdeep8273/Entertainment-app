import { NavLink } from "react-router-dom";
import classes from "./NavButton.module.css";

function NavButton({ path, children }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
      to={path}
    >
      {children}
    </NavLink>
  );
}

export default NavButton;
