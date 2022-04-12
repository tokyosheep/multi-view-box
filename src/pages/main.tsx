import React from 'react';
import { MainContainer } from '../styles/container';
import MainForm from '../components/main/main';
import Footer from '../components/footer/footer';

const { Container } = MainContainer;

const MainPage = () => {
  return (
    <Container>
      <MainForm />
      <Footer />
    </Container>
  );
};

export default MainPage;
