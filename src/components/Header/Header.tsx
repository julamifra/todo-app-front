import { HeaderProps } from "../../types/Todo";
import CreateTodo from "../CreateTodo";

function Header({ onAddTodo }: HeaderProps) {
  return (
    <header>
      <h1>Todo List - Julián Amigó Francés</h1>
      <CreateTodo saveTodo={onAddTodo}></CreateTodo>
    </header>
  );
}

export default Header;
