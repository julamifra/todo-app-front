import { TodoListProps } from "../../types/Todo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.scss";

function TodoList({ todoList }: TodoListProps) {
  return (
    <ul className={styles.list}>
      {todoList.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
          ></Todo>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
