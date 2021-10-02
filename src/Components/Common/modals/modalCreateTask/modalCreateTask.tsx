import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

interface ItodisBefore {
  title: string;
  description: string;
  timePlanned: number;
  id: string;
}

interface IProps {
  isModalCreate: boolean;
}

const ModalCreateTask = () => {
  // useEffect(() => {
  //   // setIsOpen(false);
  // }, [isModalCreate]);

  const [titleTask, setTitleTask] = useState("");
  const [describ, setDescrib] = useState("");
  const [timePlanned, setTimePlanned] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);
  // const dispatch = useDispatch();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskObj: ItodisBefore = {
      title: titleTask,
      description: describ,
      timePlanned: timePlanned,
      id: uuidv4(),
    };
  };

  const changeTitleTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleTask(e.target.value);
  };

  const changeTaskDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescrib(e.target.value);
  };

  const changeHoursPlanned = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const hoursPlanned: number = e.target.value;
    //   setTimePlanned(hoursPlanned);
  };

  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <input type="text" onChange={changeTitleTask} />
          <input type="text" onChange={changeTaskDescription} />
          <input type="number" onChange={changeHoursPlanned} />
          <button type="button">Готово</button>
        </form>
      </div>
    </>
  );
};

export default ModalCreateTask;
