import React from "react";

interface ITtodos {
  title: string;
  description?: string;
  checked: boolean;
  id: string;
}

const data: ITtodos[] = [
  {
    title: "Task1",
    description: "doing something 1",
    checked: false,
    id: "id-1",
  },
  {
    title: "Task2",
    description: "doing something 2",
    checked: false,
    id: "id-2",
  },
  {
    title: "Task3",
    description: "doing something 3",
    checked: false,
    id: "id-3",
  },
  {
    title: "Task4",
    description: "doing something 4",
    checked: false,
    id: "id-4",
  },
  {
    title: "Task5",
    description: "doing something 5",
    checked: false,
    id: "id-5",
  },
];

const Todos = () => {
  return (
    <>
      <h1>Todos</h1>
      <button type="button">Добавить</button>
      <ul>
        {data.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <div></div>
            <button type="button">Удалить</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
