import React, { useState } from "react";
import ModalCreateTask from "../../Common/modals/modalCreateTask/ModalCreateTask";
import Modal from "../../Common/modals/modal/Modal";

interface ITtodos {
  title: string;
  description?: string;
  // checked: boolean;
  id: string;
  timePlanned: number;
  // timeWasted: number;
}

const data: ITtodos[] = [
  {
    title: "Task1",
    description: "doing something 1",
    // checked: false,
    id: "id-1",
    timePlanned: 1,
    // timeWasted: 2,
  },
  {
    title: "Task2",
    description: "doing something 2",
    // checked: false,
    id: "id-2",
    timePlanned: 1,
    // timeWasted: 0.5,
  },
];

const Todos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clickCreateTask = () => {
    // console.log(clickCreateTask);
    setIsModalOpen(true);
  };

  return (
    <>
      <h1>Todos</h1>
      <button type="button" onClick={clickCreateTask}>
        Добавить
      </button>
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
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ModalCreateTask />
      </Modal>
    </>
  );
};

export default Todos;
