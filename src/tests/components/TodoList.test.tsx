// import React from "react";
import { test, expect, describe, afterEach, beforeEach } from "vitest";
import { RenderResult, cleanup, render } from "@testing-library/react";
import TodoList from "../../components/TodoList";

afterEach(cleanup);

describe("Testing TodoList component", () => {
  const mockTodoListProp = [
    {
      id: "1",
      name: "mock name 1",
      completed: false,
    },
    {
      id: "2",
      name: "mock name 2",
      completed: false,
    },
    {
      id: "3",
      name: "mock name 3",
      completed: false,
    },
  ];

  let component: RenderResult;
  beforeEach(() => {
    component = render(<TodoList todoList={mockTodoListProp} />);
  });

  test("component is defined", () => {
    expect(component).toBeDefined();
  });

  test("component is defined", async () => {
    const listItems = await component.getAllByRole("listitem");
    expect(listItems.length).toBe(mockTodoListProp.length);
  });
});
