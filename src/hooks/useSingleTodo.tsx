import { useContext, useState } from "react";
import { HandleTodoContext } from "../context/HandleTodoContext";

export const useSingleTodo = (id: string, name: string) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingValue, setEditingValue] = useState(name);
  const handleTodoContext = useContext(HandleTodoContext);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChangeInput = (value: string) => {
    setEditingValue(value);
  };

  const handleChangeCheckbox = (checked: boolean): void => {
    handleTodoContext?.handleCompleted({ id, completed: checked });
  };

  const handleOnSubmit = () => {
    setIsEditing(false);
    handleTodoContext?.handleEditName({ id, name: editingValue });
  };
  const handleRemove = () => {
    handleTodoContext?.handleRemove({ id });
  };

  return {
    isEditing,
    editingValue,
    handleDoubleClick,
    handleBlur,
    handleChangeInput,
    handleChangeCheckbox,
    handleOnSubmit,
    handleRemove,
  };
};
