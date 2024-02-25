import classes from "./PlayButton.module.css";
import { ReactComponent as PlayIcon } from "../../assets/icon-play.svg";
import Description from "../../pages/description";

function PlayButton() {
  function handleClick() {
    return <Description />;

    // console.log("hiii...");
  }
  return (
    <div onClick={handleClick} className={classes.play}>
      <div className={classes.button}>
        <PlayIcon />
        <h3>Play</h3>
      </div>
    </div>
  );
}

export default PlayButton;
