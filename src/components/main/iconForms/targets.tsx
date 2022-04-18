import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { setCenter } from '../../../redux/features/targetItem/targetItemSlice';

import IconsForm, { IconFormPorps } from '../../../parts/iconsForm';
import { stdSvgIconStyle } from '../../../styles/mixin';
import { IoImageOutline, IoScanOutline, IoDocumentOutline } from 'react-icons/io5';

const ItemIcon = styled(IoImageOutline)<{checked:boolean}>`
  ${stdSvgIconStyle}
`;

const NoneTargetIcon = styled(IoScanOutline)<{checked:boolean}>`
  ${stdSvgIconStyle}
`;

const ArtBoardIcon = styled(IoDocumentOutline)<{checked:boolean}>`
  ${stdSvgIconStyle}
`;

const TargetForm = () => {
  const dispatch = useAppDispatch();
  const centerPoint = useAppSelector(state => state.targetItem.value.center);
  const handleCenter = useCallback((name) => {
    dispatch(setCenter(name));
  }, [centerPoint]);
  const icons:IconFormPorps['icons'] = [
    {
      IconComponent: ArtBoardIcon,
      checked: centerPoint === 'artBoard',
      name: 'artBoard'
    },
    {
      IconComponent: ItemIcon,
      checked: centerPoint === 'item',
      name: 'item'
    },
    {
      IconComponent: NoneTargetIcon,
      checked: centerPoint === 'none',
      name: 'none'
    }
  ];
  return (
    <IconsForm func={handleCenter} icons={icons} />
  );
}

export default TargetForm;
