import { CreateTodoProps } from "../../types/Todo";
import styles from "./CreateTodo.module.scss";
import { useForm } from "../../hooks/useForm";

function CreateTodo({ saveTodo }: CreateTodoProps) {
  const { inputValue, formError, handleOnChange, handleSubmit } =
    useForm(saveTodo);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(event) => {
            handleOnChange(event.target.value);
          }}
          placeholder="What would you like to do?"
          autoFocus
          maxLength={255}
        ></input>
      </div>
      {formError && <p className={styles.errorMessage}>{formError}</p>}
    </form>
  );
}

export default CreateTodo;
