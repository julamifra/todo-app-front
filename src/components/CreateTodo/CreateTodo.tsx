import { CreateTodoProps } from "../../types/Todo";
import styles from "./CreateTodo.module.scss";
import { useForm } from "../../hooks/useForm";

function CreateTodo({ saveTodo }: CreateTodoProps) {
  const { inputValue, formError, handleOnChange, handleSubmit } =
    useForm(saveTodo);

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={handleOnChange}
          placeholder="¿Qué quieres añadir?"
          autoFocus
          maxLength={255}
        ></input>
      </div>
      {formError && <p className={styles.errorMessage}>{formError}</p>}
    </form>
  );
}

export default CreateTodo;
