import React from 'react';
import { MainContainer } from '../../styles/container';
import CreateForm from './createForm/createForm';

const { FooterCompo } = MainContainer;

const Footer = () => {
  return (
    <FooterCompo>
      <CreateForm />
    </FooterCompo>
  );
};

export default Footer;
