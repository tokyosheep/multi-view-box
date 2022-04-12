import styled from 'styled-components';

export const MainContainer = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
  `,
  MainCompo: styled.main`
    display: flex;
    justify-content: space-between;
    gap:10px;
    align-items: center;
    padding: 5px;
    box-sizing:border-box;
  `,
  FooterCompo: styled.footer`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    align-items: center;
  `
}
