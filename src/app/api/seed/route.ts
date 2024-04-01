import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../prisma/lib/prisma";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // delete * from todo

  await prisma.todo.createMany({
    data: [
      { description: "Hacer el ensayo", complete: true },
      { description: "Hacer la tarea" },
      { description: "Ir a correr" },
    ],
  });

  const todo = await prisma.todo.create({
    data: {
      description: "Priedra del alma",
      complete: true,
    },
  });
  console.log(todo);
  return NextResponse.json({
    message: "Seed Execute",
  });
}
