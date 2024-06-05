import { useForm } from "../../hooks/useForm";
import { act, renderHook, RenderHookResult } from "@testing-library/react";
import { Mock, expect, vi, beforeEach, describe, test } from "vitest";

describe("userForm hook", () => {
  let useFormResult: RenderHookResult<ReturnType<typeof useForm>, void>;
  let saveTodoMock: Mock;

  beforeEach(() => {
    saveTodoMock = vi.fn();
    useFormResult = renderHook(() => useForm(saveTodoMock));
  });

  test("Render correctly", () => {
    expect(useFormResult.result.current).toBeDefined();
  });

  test("should update inputValue when handleOnChange is called ", () => {
    const newValue = "testNewValue";
    act(() => {
      useFormResult.result.current.handleOnChange(newValue);
    });
    expect(useFormResult.result.current.inputValue).toBe(newValue);
  });

  test("should call saveTodo when handleSubmit is called with valid input", () => {
    const newValue = "testNewValue";
    act(() => {
      useFormResult.result.current.handleOnChange(newValue);
    });

    act(() => {
      useFormResult.result.current.handleSubmit();
    });
    expect(saveTodoMock).toHaveBeenCalled();
  });

  test("should clean inputValue when handleSubmit is called with valid input", () => {
    const newValue = "testNewValue";
    act(() => {
      useFormResult.result.current.handleOnChange(newValue);
    });

    act(() => {
      useFormResult.result.current.handleSubmit();
    });
    expect(useFormResult.result.current.inputValue).toBe("");
  });

  test("should update formError when handleSubmit is called with invalid input", () => {
    const newEmptyValue = "";
    act(() => {
      useFormResult.result.current.handleOnChange(newEmptyValue);
    });

    act(() => {
      useFormResult.result.current.handleSubmit();
    });

    expect(useFormResult.result.current.formError).not.toBe("");
  });
});
