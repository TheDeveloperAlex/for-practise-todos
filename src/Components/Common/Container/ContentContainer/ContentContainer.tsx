import React from "react";
import { Wrapper } from './ContentContainerStyled'
import { ITheme } from '../../interfaces/interfaces'
interface IProps {
  children?: JSX.Element;
  theme: ITheme;
}

const ContentContainer = ({ children, theme }: IProps) => {
  return <Wrapper color={theme.bgColor}>{children}</Wrapper>;
};

export default ContentContainer;
