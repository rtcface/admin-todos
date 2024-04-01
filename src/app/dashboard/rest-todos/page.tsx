export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NewTodo, TodosGrid } from "@/todos";
import prisma from "../../../../prisma/lib/prisma";

export const metadata = {
  title: "Listado de tareas",
  description: "Listado de tareas",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <div>
      <div className=" w-full px-4 mx-8 mb-8">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}
