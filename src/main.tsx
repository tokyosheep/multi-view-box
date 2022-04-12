import React from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Layout from './pages/layout';

import { store } from './redux/app/store';
import { Provider } from 'react-redux';

const GlobalStyle = createGlobalStyle<{bg:string}>`
    body{
        margin: 0;
        font-family: "Helvetica Neue" , Helvetica , Arial , Verdana , Roboto , "游ゴシック" , "Yu Gothic" , "游ゴシック体" , "YuGothic" , "ヒラギノ角ゴ Pro W3" , "Hiragino Kaku Gothic Pro" , "Meiryo UI" , "メイリオ" , Meiryo , "ＭＳ Ｐゴシック" , "MS PGothic" , sans-serif;
        background: ${props => props.bg};
        overflow: hidden;
    }   
`;

const ColorTheme = {
  darkGray: '#212121',
  gray: '#5A5A5A',
  lightGray: '#969191',
  light: '#EAEAEA',
  black: '#000',
  white: '#fff'
} as const;

type ThemeType = typeof ColorTheme;

  declare module 'styled-components' {
      export interface DefaultTheme extends ThemeType {}
  };

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider theme={ColorTheme}>
    <Provider store={store}>
      <GlobalStyle bg={ColorTheme.gray}/>
      <Layout/>
    </Provider>
  </ThemeProvider>
);
