export interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

export type TodoId = Pick<Todo, "id">;
export type TodoName = Pick<Todo, "name">;
export type TodoCompleted = Pick<Todo, "completed">;

export interface TodoListProps {
  todoList: Todo[];
}

export interface TodoProps extends Todo {}

export interface HeaderProps {
  onAddTodo: ({ name }: TodoName) => void;
}
export interface CreateTodoProps {
  saveTodo: ({ name }: TodoName) => void;
}
