import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const InputField = styled.input<{ $backgroundColor?: string; $hasImageLeft?: boolean }>`
  color: ${(props) => props.theme.brownD4C};
  height: 70%;
  max-height: 60%;
  width: 100%;
  background-color: ${(props) => props.$backgroundColor ?? props.theme.brownB97};
  border: 2px solid ${(props) => props.theme.brown671};
  outline: none;
  font-family: monospace;
  padding: 10px;
  margin: auto;
  font-size: 1rem;
  padding-left: ${(props) => props.$hasImageLeft && '40px'};
  box-sizing: border-box;
  &::placeholder {
    color: ${(props) => props.theme.brownE6D};
    margin-left: 40px;
  }
  &:focus {
    border: 2.5px solid ${(props) => props.theme.brownE6D};
    color: ${(props) => props.theme.text};
  }
`;

export const ImageLeft = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 38%;
  margin: auto 0;
  margin-left: 10px;
`;
