import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.brown5BC};
  border-radius: 5px;
  padding: 1.2rem;
  width: 40%;
`;

export const WrapperIconClose = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.text};
`;

export const LabelStyled = styled.label`
  margin: 10px 0;
`;

export const TextAreaStyled = styled.textarea`
  display: block;
  width: 100%;
  background-color: ${(props) => props.theme.brown2D5};
  color: ${(props) => props.theme.brownD4C};
  flex-grow: 1;
  margin: 10px auto;
  outline: none;
  border: 2px solid ${(props) => props.theme.brown671};
  font-size: 1rem;
  padding: 10px;
  box-sizing: border-box;
  resize: vertical;
  &::placeholder {
    color: ${(props) => props.theme.brownE6D};
    margin-left: 40px;
  }
  &:focus {
    border: 2.5px solid ${(props) => props.theme.brownE6D};
    color: ${(props) => props.theme.text};
  }
`;

export const Wrapper = styled.div`
  margin: 10px 0;
`;
