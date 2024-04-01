export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NewTodo, TodosGrid } from "@/todos";
import prisma from "@/../prisma/lib/prisma";

export const metadata = {
  title: "Listado de todos para server actions",
  description: "Listado de todos para server actions",
};

export default async function ServerPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <>
      <span className="text-3xl">Server actions</span>
      <div className="w-full px-3 mx-5 mb-5 mt-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}
