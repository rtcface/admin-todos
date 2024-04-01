"use client";
import { Todo } from "@prisma/client";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import { startTransition, useOptimistic } from "react";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      complete: newCompleteValue,
    })
  );
  const onToggelTodo = async () => {
    try {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete);
      console.log("Todo updated");
    } catch (error) {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete));
      console.log(error);
      alert("Ha ocurrido un error");
      throw error; // Re-throw the error to stop the execution of the component. This is not recommended, but it's a good practice to handle errors in the component. It's also a good practice to handle errors in the component. It's also a good practice to handle errors in the component. It's also a good practice to handle errors in the component. It's also a good practice to handle errors in the component. It's also a good practice to handle errors in the component. It's also a good
    }
  };
  return (
    <div
      className={todoOptimistic.complete ? styles.todoDone : styles.todoPending}
    >
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          onClick={
            /* () => toggleTodo(todoOptimistic.id, !todoOptimistic.complete) */
            onToggelTodo
          }
          className={`
        flex p-2 rounded-md cursor-pointer
        hover:bg-opacity-60
        ${todoOptimistic.complete ? "bg-blue-100" : "bg-red-100"}
        `}
        >
          {todoOptimistic.complete ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div className="text-center sm:text-left">
          {todoOptimistic.description}
        </div>
      </div>
    </div>
  );
};
