import React from "react";
import s from "./ContentContainer.module.css";

interface IProps {
  children?: JSX.Element;
}

const ContentContainer = ({ children }: IProps) => {
  return <div className={s.ContentContainer}>{children}</div>;
};

export default ContentContainer;
