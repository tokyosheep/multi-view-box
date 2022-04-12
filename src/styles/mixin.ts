import { css } from 'styled-components';

export const stdSvgIconStyle = css<{checked:boolean}>`
  stroke: ${props => props.checked ? '#999' : '#fff'};
  width: 40px;
  height: 40px;
  stroke-width:3px;
  cursor: pointer;
`;

export const stdSvgIconButton = css`
  stroke: #fff;
  width: 40px;
  height: 40px;
  stroke-width: 3px;
  cursor: pointer;
  &:active{
    stroke: #999;
  }
`;
