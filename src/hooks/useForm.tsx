import { useState } from "react";
import { validateForm } from "../utils/validations";

export const useForm = (saveTodo: ({ name }: { name: string }) => void) => {
  const [inputValue, setInputValue] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (): void => {
    const error = validateForm(inputValue);
    if (error) {
      setFormError(error);
      return;
    }
    saveTodo({ name: inputValue });
    setInputValue("");
    setFormError("");
  };

  const handleOnChange = (value: string): void => {
    setInputValue(value);
  };

  return {
    handleSubmit,
    handleOnChange,
    inputValue,
    formError,
  };
};
