import { TodoProps } from "../../types/Todo";
import styles from "./Todo.module.scss";
import { useSingleTodo } from "../../hooks/useSingleTodo";

function Todo({ id, name, completed }: TodoProps) {
  const {
    isEditing,
    editingValue,
    handleBlur,
    handleDoubleClick,
    handleChangeInput,
    handleChangeCheckbox,
    handleOnSubmit,
    handleRemove,
  } = useSingleTodo(id, name);

  return (
    <div className={styles.todo}>
      {isEditing ? (
        <div className={styles.inputContainer}>
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              handleOnSubmit();
            }}
          >
            <input
              type="text"
              className={styles.editingInput}
              onChange={(ev) => handleChangeInput(ev.target.value)}
              value={editingValue}
              autoFocus
              onBlur={handleBlur}
            ></input>
          </form>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            className={styles.completedCheckbox}
            checked={completed}
            onChange={(ev) => handleChangeCheckbox(ev.target.checked)}
          ></input>
          <label
            style={{ textDecoration: completed ? "line-through" : "" }}
            onDoubleClick={handleDoubleClick}
          >
            {editingValue}
          </label>
        </>
      )}

      <button onClick={handleRemove}></button>
    </div>
  );
}

export default Todo;
