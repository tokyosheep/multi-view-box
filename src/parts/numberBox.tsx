import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

export type NumberProps = {
    value:number,
    name:string,
    min:number,
    max:number,
    step:number|string,
    func:(e:React.ChangeEvent<HTMLInputElement>) => void
}

const NumberWrapper = styled.label<{background:string}>`
    display: flex;
    width: 90px;
    justify-content: start;
    gap: 3px;
    & > input{
        border: none;
        background: ${props => props.background};
        box-shadow: 3px 3px 3px inset rgba(0,0,0,0.2);
        border-radius: 3px;
        height: 40px;
        width: 60px;
        color: #fff;
    }
`;

const TitleText = styled.span`
  color: #fff;
  font-size: 30px;
  font-weight: 300;
`;

export const NumberBox:FC<NumberProps> = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <NumberWrapper background={theme.darkGray}>
        <input type='number'
          value={props.value}
          min={props.min}
          max={props.max}
          step={props.step}
          onChange={(e) => props.func(e)}
        />
        <TitleText>%</TitleText>
    </NumberWrapper>
  )
}
