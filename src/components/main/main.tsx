import React from 'react';
import { MainContainer } from '../../styles/container';
import TargetForm from './iconForms/targets';
import RangeFormBox from './iconForms/range';
import ZoomFormCompo from './zoomForm/zoomForm';

const { MainCompo } = MainContainer;

const MainForm = () => {
  return (
    <MainCompo>
      <ZoomFormCompo />
      <TargetForm />
      <RangeFormBox />
    </MainCompo>
  )
};

export default MainForm;
