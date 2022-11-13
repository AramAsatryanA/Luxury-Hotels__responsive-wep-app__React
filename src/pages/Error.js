import ErrorPageContent from "../components/ErrorPageContent/ErrorPageContent";

import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return <ErrorPageContent status={error.status} statusText={error.statusText} />;
}

export default ErrorPage;
