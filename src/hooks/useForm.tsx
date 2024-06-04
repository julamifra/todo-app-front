import React, { useState } from "react";

export const useForm = (saveTodo: ({ name }: { name: string }) => void) => {
  const [inputValue, setInputValue] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const error = validate(inputValue);
    if (error) {
      setFormError(error);
      return;
    }
    saveTodo({ name: inputValue });
    setInputValue("");
    setFormError("");
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const validate = (value: string) => {
    if (!value) {
      return "No puedes añadir una tarea vacía";
    }
    return "";
  };

  return {
    handleSubmit,
    handleOnChange,
    inputValue,
    formError,
  };
};
