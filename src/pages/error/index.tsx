import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Désolé, une erreur inattendue s'est produite.</p>
      <p>
        <i>{(error as { statusText?: string; message?: string }).statusText || (error as { statusText?: string; message?: string }).message}</i>
      </p>
    </div>
  );
}