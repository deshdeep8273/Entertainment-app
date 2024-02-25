import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Opps! Something going wrong...</h1>
      <p>Status: {error.status}</p>
      <p>{error.data}</p>
    </div>
  );
}

export default ErrorPage;
