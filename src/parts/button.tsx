import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { darken } from 'polished';

export type ButtonProps = {
  name:string,
  func:(arg:unknown) => void,
  arg?:unknown
}

const StdButtonStyle = styled.button<{color:string}>`
  border: none;
  color: #fff;
  font-size: 13px;
  font-weight: 300;
  background: ${props => darken(0.2, props.color)};
  width: 60px;
  height: 40px;
  border-radius: 3px;
  &:active {
    background: ${props => darken(0.3, props.color)};
  }
  &:focus{
    outline: none;
  }
`;

export const StdButton:FC<ButtonProps> = ({ name, func }) => {
  const theme = useContext(ThemeContext);
  return (
    <StdButtonStyle color={theme.gray} onClick={func}>
        {name}
    </StdButtonStyle>
  );
};
