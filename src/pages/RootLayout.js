import { Outlet } from "react-router";
import classes from "./RootLayout.module.css";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import { useSelector } from "react-redux";
function RootLayout() {
  const isLoading = useSelector((state) => state.content.isLoading);

  return (
    <div className={classes.container}>
      <NavBar />
      <main>
        <SearchBar />
        <section className={classes.content}>
          {isLoading ? <h1>Loading content for you...</h1> : <Outlet />}
        </section>
      </main>
    </div>
  );
}

export default RootLayout;
