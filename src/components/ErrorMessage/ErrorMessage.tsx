import { ErrorCodesTypes } from "../../types/ApiTypesd";

function ErrorMessage({ error }: { error: ErrorCodesTypes | string }) {
  return <p>{error}</p>;
}

export default ErrorMessage;
