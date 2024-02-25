import classes from "./ContentGrid.module.css";

function ContentGrid({ content, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <div className={classes.grid}>{content}</div>
    </div>
  );
}

export default ContentGrid;
