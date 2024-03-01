import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="mt-5">
      <h1 className="text-light text-center">Oops!</h1>
      <p className="text-center text-light">MAAF ADA KESALAHAN</p>
      <div className="d-flex justify-content-center g-2 ">
        <p className="text-center text-light mx-2">
          <i>{error.status}</i>
        </p>
        <p className="text-center text-warning">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
