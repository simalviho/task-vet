import { FC, InputHTMLAttributes } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export interface InputProps {
  props?: InputHTMLAttributes<HTMLInputElement>;
  error?: string;
}

const Input: FC<InputProps> = ({ props, error }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full">
        <input
          className="text-base px-4 py-3 h-[50px] w-full peer placeholder-transparent font-normal border rounded border-gray-200 focus:outline-none focus:border-gray-200"
          id={`${props?.name}-input-id`}
          {...props}
        />
        {props?.placeholder && (
          <label
            htmlFor={`${props?.name}-input-id`}
            className="absolute left-3 bg-white !leading-none px-1 transform -translate-y-1/2 top-0 text-[#57667E] text-xs transition-all peer-placeholder-shown:text-base cursor-text peer-placeholder-shown:text-[#57667E] peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:text-brand-palette-primary peer-focus:text-xs"
          >
            {props.placeholder}
          </label>
        )}
      </div>
      <ErrorMessage error={error} />
    </div>
  );
};

export default Input;
