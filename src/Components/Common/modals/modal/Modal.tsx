import Overlay from "../overlay/Overlay";
import "material-icons/iconfont/material-icons.scss";
import s from "./Modal.module.css";
interface IProps {
  children?: JSX.Element;
  isModalOpen: boolean;
  setIsModalOpen: (active: boolean) => void;
}

const Modal = ({ children, isModalOpen, setIsModalOpen }: IProps) => {
  const closeModal = (e: React.MouseEvent<HTMLSpanElement>) => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && (
        <Overlay>
          <div className={s.modalWrapper}>
            <div className={s.iconClose}>
              <span className="material-icons" onClick={closeModal}>
                clear
              </span>
            </div>
            {children}
          </div>
        </Overlay>
      )}
    </>
  );
};

export default Modal;
