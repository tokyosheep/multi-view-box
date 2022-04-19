import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { setRange } from '../../../redux/features/targetItem/targetItemSlice';

import IconsForm, { IconFormPorps } from '../../../parts/iconsForm';
import { stdSvgIconStyle } from '../../../styles/mixin';
import { FiEye, FiGlobe } from 'react-icons/fi';
import { IoDocumentsOutline } from 'react-icons/io5';

const ViewIcon = styled(FiEye)<{checked:boolean}>`
  ${stdSvgIconStyle}
`;

const GlobalIcon = styled(FiGlobe)<{checked:boolean}>`
  ${stdSvgIconStyle}
`;

const DocsIcon = styled(IoDocumentsOutline)<{checked:boolean}>`
  ${stdSvgIconStyle}
`;

const RangeFormBox = () => {
  const dispatch = useAppDispatch();
  const rangePoint = useAppSelector(state => state.targetItem.value.range);
  const handleRangePoint = useCallback((name) => {
    dispatch(setRange(name));
  }, [rangePoint]);

  const icons:IconFormPorps['icons'] = [
    {
      IconComponent: ViewIcon,
      checked: rangePoint === 'views',
      name: 'views'
    },
    {
      IconComponent: GlobalIcon,
      checked: rangePoint === 'global',
      name: 'global'
    },
    {
      IconComponent: DocsIcon,
      checked: rangePoint === 'documents',
      name: 'documents'
    }
  ];
  return (
    <IconsForm func={handleRangePoint} icons={icons} ></IconsForm>
  );
};

export default RangeFormBox;
