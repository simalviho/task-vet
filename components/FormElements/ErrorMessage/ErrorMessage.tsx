import { FC } from "react";

interface ErrorMessageProps {
  error?: string;
}
const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  return error ? (
    <span className={`text-xs mt-1.5 font-medium text-red-600`}>{error}</span>
  ) : null;
};

export default ErrorMessage;
