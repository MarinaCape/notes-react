import styled from 'styled-components';

export const HeaderContainer = styled.section`
  display: flex;
  width: 100vw;
  height: 10vh;
  background-color: ${(props) => props.theme.secondary};
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

export const DivRow = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.text};
  margin-right: 1.2rem;
`;
