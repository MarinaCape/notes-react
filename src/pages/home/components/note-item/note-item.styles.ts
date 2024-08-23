import styled from 'styled-components';

export const NoteItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.5px solid ${(props) => props.theme.brown0C0};
  margin: 10px auto;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.white};
  outline: none;
  color: ${(props) => props.theme.text};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const InfoContainer = styled.div`
  display: flex;
  margin: 1.2rem 0;
  flex-direction: column;
  justify-content: space-between;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperArrow = styled.div`
  display: flex;
  margin-right: 1.2rem;
  align-items: flex-start;
  margin-top: 20px;
  cursor: pointer;
`;

export const Description = styled.p<{ $lineThrough: boolean }>`
  margin: 0;
  margin-top: 10px;
  white-space: pre-line;
  text-decoration: ${(props) => (props.$lineThrough ? 'line-through' : '')};
`;
