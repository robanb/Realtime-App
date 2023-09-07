"use client";

import { Task } from "@/models/task";
import { useState, useEffect } from "react";
import { remult } from "remult";

const taskRepo = remult.repo(Task);
export default function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  useEffect(() => {
    taskRepo
      .find({
        orderBy: {
          createdAt: "asc",
        },
        where: {
          completed: true,
        },
      })
      .then(setTasks);
  }, []);
  return (
    <div>
      <h1>Todo {tasks.length}</h1>
      <main>
        {tasks.map((task) => {
          return (
            <div key={task.id}>
              <input type="checkbox" checked={task.completed} />
              <span>{task.title}</span>
            </div>
          );
        })}
      </main>
    </div>
  );
}
