import React from "react";
import clsx from "clsx";
import { useId } from "react";

const TextInput = ({
  placeholder,
  value,
  onChange,
  type,
  id: idParam,
  required,
  isDisabled,
  errorMessage,
  hintMessage,
}) => {
  const generateId = useId();
  const id = idParam ?? generateId;
  const hasError = !!errorMessage;

  const messageId = useId();

  const hasBottomSection = !!errorMessage || !!hintMessage;

  return (
    <div className={clsx("flex w-full flex-col gap-1.5", "relative")}>
      <div className="relative">
        <input
          id={id}
          aria-describedby={hasError ? messageId : undefined}
          aria-invalid={hasError ? true : undefined}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value, event)}
          required={required}
          disabled={isDisabled}
          className={clsx(
            "block w-full",
            "px-[13px] py-[9px]",
            "outline:none",
            "border border-neutral-200 disabled:border-neutral-100",
            "bg-neutral-50",
            "rounded",
            "text-sm text-neutral-900 placeholder:text-neutral-500 disabled:text-neutral-400 disabled:placeholder:text-neutral-400",
            "focus:outline-none",
            "focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/[.12] focus:ring-offset-0",
            hasError && "focus:border-red-600 focus:ring-red-600/[.12]",
            "disabled:pointer-events-none"
          )}
        />
      </div>
      {hasBottomSection && (
        <div
          id={messageId}
          className={clsx(
            "text-sm text-neutral-500",
            hasError && "text-red-600"
          )}
        >
          {errorMessage || hintMessage}
        </div>
      )}
    </div>
  );
};

export default TextInput;
