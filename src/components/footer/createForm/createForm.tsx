import React from 'react';
import styled from 'styled-components';
import { SendHostScript } from '../../../fileSystem/connectHostScript';
import { stdSvgIconButton } from '../../../styles/mixin';

import { IoImagesOutline, IoDocumentsOutline } from 'react-icons/io5';

type ArgCreate = {
  type: 'createViwes',
  arg: {
    targetItem:'artBoard'|'item'
  }
}

const CreateFormWrapper = styled.div`
  display: flex;
  justify-content: start;
  border-radius: 5px;
  box-sizing: border-box;
  gap: 5px;
`;

const ItemsIcon = styled(IoImagesOutline)`
  ${stdSvgIconButton};
`;

const BoardsIcon = styled(IoDocumentsOutline)`
  ${stdSvgIconButton};
`;

const CreateForm = () => {
  const createArtBoard = async (targetItem:'artBoard'|'item') => {
    const connect = new SendHostScript();
    const arg:ArgCreate = {
      type: 'createViwes',
      arg: {
        targetItem
      }
    }
    const r = await connect.callHostScript(arg);
    console.log(r);
  }
  return (
    <CreateFormWrapper>
      <ItemsIcon onClick={() => createArtBoard('item')}/>
      <BoardsIcon onClick={() => createArtBoard('artBoard')} />
    </CreateFormWrapper>
  );
};

export default CreateForm;
