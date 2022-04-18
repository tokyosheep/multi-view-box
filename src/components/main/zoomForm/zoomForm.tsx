import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../../redux/app/hooks';
import { setRaioValue } from '../../../redux/features/zoomRatio/zoomRatioSlice';
import { FiZoomIn, FiZoomOut } from 'react-icons/fi';
import { stdSvgIconButton } from '../../../styles/mixin';
import { NumberBox } from '../../../parts/numberBox';
import { StdButton } from '../../../parts/button';

import { ArgType, SendHostScript } from '../../../fileSystem/connectHostScript';
// import { writeDebugData } from '../../../fileSystem/init';

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

type ArgJustZoom = {
  type: 'justZoom',
  arg: {
    range: 'global'|'views'|'documemts',
    direction: 'in' | 'out'
  }
}

const ZoomFormCompo = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state);
  const zoomRatio = state.zoomRatio.value;
  const handleZoom = useCallback((e) => {
    dispatch(setRaioValue(parseFloat(e.target.value)));
  }, [zoomRatio]);
  const excuteZoom:(arg:ArgType['arg'])=>Promise<void> = async arg => {
    const connect = new SendHostScript();
    // await writeDebugData({ type: 'sortZoom', arg });
    arg.zoomRatio = arg.zoomRatio / 100;
    const r = await connect.callHostScript({ type: 'sortZoom', arg });
    console.log(r);
  };

  const justZoom:(range:ArgJustZoom['arg']['range'], direction:ArgJustZoom['arg']['direction'])=>Promise<void> = async (range, direction) => {
    const arg:ArgJustZoom = {
      type: 'justZoom',
      arg: {
        range,
        direction
      }
    }
    const connect = new SendHostScript();
    const r = await connect.callHostScript(arg);
    console.log(r);
  }
  return (
    <ZoomForm>
      <ZoomIcon
        onClick={() => justZoom(state.targetItem.value.range, 'in')}
      />
      <ZoomOutIcon
        onClick={() => justZoom(state.targetItem.value.range, 'out')}
      />
      <StdButton name='done' func={() => excuteZoom({ zoomRatio: state.zoomRatio.value, targetItem: state.targetItem.value })} />
      <NumberBox
        min={0.1}
        max={1000}
        value={zoomRatio}
        func={handleZoom}
        step={0.1}
        name='zoomRatio'
      />
    </ZoomForm>
  );
};

export default ZoomFormCompo;
