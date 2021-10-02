import React from "react";
import s from "./Overlay.module.css";
interface IProps {
  children?: JSX.Element;
}

const Overlay = ({ children }: IProps) => {
  return <div className={s.overlay}>{children}</div>;
};

export default Overlay;
