import { createContext } from "react";
import { TodoId } from "../types/Todo";

export interface TodoContextProps {
  handleRemove: ({ id }: TodoId) => void;
  handleCompleted: ({
    id,
    completed,
  }: {
    id: string;
    completed: boolean;
  }) => void;
  handleEditName: ({ id, name }: { id: string; name: string }) => void;
}

export const HandleTodoContext = createContext<TodoContextProps | undefined>(
  undefined
);
