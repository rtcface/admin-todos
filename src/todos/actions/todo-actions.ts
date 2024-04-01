"use server";

import prisma from "@/../prisma/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const sleep = async (seconds: number = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const toggleTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  //await sleep(3);
  const todo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath("/dashboard/server-actions");

  return todo;
};

//function for delete all complete todo
export const deleteAllComplete = async () => {
  await prisma.todo.deleteMany({
    where: {
      complete: true,
    },
  });
  revalidatePath("/dashboard/server-actions");
};
//function for create new todo
export const createTodo = async (description: string) => {
  const todo = await prisma.todo.create({
    data: { description },
  });
  revalidatePath("/dashboard/server-actions");
  return todo;
};
