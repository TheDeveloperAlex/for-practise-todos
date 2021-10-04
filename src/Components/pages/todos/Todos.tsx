import React, { useState } from "react";
import ModalCreateTask from "../../Common/modals/modalCreateTask/ModalCreateTask";
import Modal from "../../Common/modals/modal/Modal";
import { IthemeMain } from "../../Common/interfaces/interfaces";
import { Wrapper } from "./TodosStyled";
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

const Todos = ({ theme }: IthemeMain) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickCreateTask = () => {
    // console.log(clickCreateTask);
    setIsModalOpen(true);
  };

  const clickCheckbox = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.id);
    document
      .querySelector(`#${e.currentTarget.id}`)
      ?.classList.toggle("checked");
    document.querySelector(`.title-${e.currentTarget.id}`)?.classList.toggle("cross");
    document.querySelector(`.describtion-${e.currentTarget.id}`)?.classList.toggle("cross");

  };

  const changeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Wrapper color={theme.bgColor}>
      <h1>Todos</h1>
      <button
        type="button"
        className="buttonCustom createTaskBtn"
        onClick={clickCreateTask}
      >
        <span className="material-icons createTaskBtnIcon">add</span>
      </button>
      <ul className="taskList">
        {data.map((task) => (
          <li key={task.id} className="taskListItem" id={task.id}>
            <input
              type="checkbox"
              className="checkbox"
              onClick={clickCheckbox}
              onChange={changeCheckbox}
              id={task.id}
            />
            {/* <div className="checkbox" onClick={changeCheckbox}></div> */}
            <div>
              <div className="titleWrapper">
                <h2 className={`title-${task.id}`}>{task.title}</h2>
                {/* <button type="button" className="buttonCustom">Редактировать</button> */}
              </div>

              <p className={`describtion-${task.id}`}>{task.description}</p>
            </div>

            <div className="deleteTaskBtnWrapper">
              <button type="button" className="buttonCustom deleteTaskBtn">
                <span className="material-icons deleteTaskBtnIcon">delete</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ModalCreateTask />
      </Modal>
    </Wrapper>
  );
};

export default Todos;
