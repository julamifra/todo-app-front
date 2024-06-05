import { afterAll, beforeAll, describe, expect, test, vi } from "vitest";
import { RenderHookResult, act, renderHook } from "@testing-library/react";
import { useFetchTodoList } from "../../hooks/useFetchTodoList";

describe("Test userForm hook", () => {
  const mockResponseOK = [
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
  ];
  const mockResponseKO = {
    errorCode: "TEST_ERROR_CODE",
  };
  const fetchSpy = vi.spyOn(window, "fetch");

  beforeAll(() => {
    vi.resetAllMocks();
  });

  afterAll(() => {
    fetchSpy.mockRestore();
  });

  let useFetchResult: RenderHookResult<
    ReturnType<typeof useFetchTodoList>,
    void
  >;

  test("should update todoList with json response", async () => {
    const mockResolveValue = Promise.resolve({
      json: () => Promise.resolve(mockResponseOK),
      ok: true,
    } as Response);
    fetchSpy.mockReturnValue(
      new Promise((resolve) => resolve(mockResolveValue))
    );
    await act(() => {
      useFetchResult = renderHook(() => useFetchTodoList());
    });

    expect(useFetchResult.result.current.todoList.length).toBe(
      mockResponseOK.length
    );

    expect(useFetchResult.result.current.todoList[0].name).toBe(
      mockResponseOK[0].name
    );
  });

  test("should update error", async () => {
    const mockResolveValue = Promise.resolve({
      json: () => Promise.resolve(mockResponseKO),
      ok: false,
    } as Response);
    fetchSpy.mockReturnValue(
      new Promise((resolve) => resolve(mockResolveValue))
    );
    await act(() => {
      useFetchResult = renderHook(() => useFetchTodoList());
    });

    expect(useFetchResult.result.current.errorState).toBe(
      mockResponseKO.errorCode
    );
  });
});
