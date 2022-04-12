import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../../redux/app/hooks';
import { setRaioValue } from '../../../redux/features/zoomRatio/zoomRatioSlice';
import { FiZoomIn, FiZoomOut } from 'react-icons/fi';
import { stdSvgIconButton } from '../../../styles/mixin';
import { NumberBox } from '../../../parts/numberBox';
import { StdButton } from '../../../parts/button';

import { ArgType, SendHostScript } from '../../../fileSystem/connectHostScript';
import { writeDebugData } from '../../../fileSystem/init';

const ZoomForm = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 5px;
  box-sizing: border-box;
  gap: 5px;
`;

const ZoomIcon = styled(FiZoomIn)`
  ${stdSvgIconButton}
`;

const ZoomOutIcon = styled(FiZoomOut)`
  ${stdSvgIconButton}
`;

const ZoomFormCompo = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state);
  const zoomRatio = state.zoomRatio.value;
  const handleZoom = useCallback((e) => {
    dispatch(setRaioValue(parseFloat(e.target.value)));
  }, [zoomRatio]);
  const excuteZoom:(arg:ArgType['arg'])=>Promise<void> = async arg => {
    const connect = new SendHostScript();
    await writeDebugData({ type: 'sortZoom', arg });
  }
  return (
    <ZoomForm>
      <ZoomIcon/>
      <ZoomOutIcon/>
      <StdButton name="done" func={() => excuteZoom({ zoomRatio: state.zoomRatio.value, targetItem: state.targetItem.value })} />
      <NumberBox
        min={-100}
        max={100}
        value={zoomRatio}
        func={handleZoom}
        step={1}
        name='zoomRatio'
      />
    </ZoomForm>
  );
};

export default ZoomFormCompo;
