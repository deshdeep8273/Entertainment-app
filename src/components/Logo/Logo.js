import logo from "../../assets/logo.svg";
import classes from "./Logo.module.css";

function Logo() {
  return <img className={classes.logo} src={logo} alt="logo" />;
}

export default Logo;
