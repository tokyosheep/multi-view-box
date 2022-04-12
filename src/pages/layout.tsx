import React, { useMemo } from 'react';
import MainPage from './main';

import { init } from '../fileSystem/init';

const Layout = () => {
  useMemo(() => {
    init();
  }, [])
  return (
      <MainPage />
  );
};

export default Layout;
