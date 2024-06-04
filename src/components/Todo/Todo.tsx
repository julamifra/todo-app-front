import React, { useContext } from "react";
import { TodoProps } from "../../types/Todo";
import styles from "./Todo.module.scss";
import { HandleTodoContext } from "../../context/HandleTodoContext";

function Todo({ id, name, completed }: TodoProps) {
  const handleTodoContext = useContext(HandleTodoContext);

  const handleChangeCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    handleTodoContext?.handleCompleted({ id, completed: event.target.checked });
  };

  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleChangeCheckbox}
      ></input>
      <label style={{ textDecoration: completed ? "line-through" : "" }}>
        {name}
      </label>
      <button onClick={() => handleTodoContext?.handleRemove({ id })}></button>
    </div>
  );
}

export default Todo;
