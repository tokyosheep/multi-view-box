import React from 'react';
import styled from 'styled-components';
import { stdSvgIconButton } from '../../../styles/mixin';

import { IoImagesOutline, IoDocumentsOutline } from 'react-icons/io5';

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
  return (
    <CreateFormWrapper>
      <ItemsIcon />
      <BoardsIcon />
    </CreateFormWrapper>
  );
};

export default CreateForm;
