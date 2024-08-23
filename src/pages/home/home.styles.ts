import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.background};
  width: 100vw;
  height: 100vh;
`;

export const NoteListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.7rem;
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  padding: 2.5rem;
`;

export const LabelStyled = styled.label`
  color: ${(props) => props.theme.text};
`;
