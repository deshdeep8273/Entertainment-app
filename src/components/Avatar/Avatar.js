import avatar from "../../assets/image-avatar.png";
import classes from "./Avatar.module.css";

function Avatar() {
  return <img className={classes.avatar} src={avatar} />;
}

export default Avatar;
