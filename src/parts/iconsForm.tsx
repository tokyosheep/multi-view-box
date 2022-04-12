import React, { FC } from 'react';
import { IconType } from 'react-icons';
import styled, { StyledComponent, DefaultTheme } from 'styled-components';

const IconRange = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 5px;
  box-sizing: border-box;
  gap: 5px;
`;

export type IconFormPorps = {
  icons: {
    IconComponent: StyledComponent<IconType, DefaultTheme, {
      checked: boolean;
    }, never>,
    checked: boolean,
    name: string
  }[],
  func: (name:string) => void
}

const IconsForm:FC<IconFormPorps> = ({ icons, func }) => {
  const iconCompos = icons.map(icon => {
    const { IconComponent, checked, name } = icon;
    return (
      <IconComponent key={name} onClick={() => func(name)} checked={checked}>
      </IconComponent>
    )
  })
  return (
    <IconRange>
      {iconCompos}
    </IconRange>
  )
}

export default IconsForm;
