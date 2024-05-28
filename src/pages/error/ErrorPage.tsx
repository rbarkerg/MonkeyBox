import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>😅 Oops!</h1>
      <p>💥Sorry, page not found.💥</p>
    </div>
  );
}