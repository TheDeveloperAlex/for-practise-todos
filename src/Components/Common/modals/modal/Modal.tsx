// import Overlay from "../overlay/Overlay";
import "material-icons/iconfont/material-icons.scss";
import {Overlay} from './ModalStyled'
interface IProps {
  children?: JSX.Element;
  isModalOpen: boolean;
  
  setIsModalOpen: (active: boolean) => void;
}

const Modal = ({ children, isModalOpen, setIsModalOpen }: IProps) => {
  const closeModal = (e: React.MouseEvent<HTMLSpanElement>) => {
    setIsModalOpen(false);
  };
  const closeModalBack = ({target, currentTarget }: React.MouseEvent<HTMLSpanElement>) => {
    target === currentTarget && setIsModalOpen(false);
  }
  return (
    <>
      {isModalOpen && (
        <Overlay onClick={closeModalBack}>
          <div className="modalWrapper" >
            <div className="iconClose">
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
