import styled from 'styled-components';

export const LabelContainer = styled.label`
  display: flex;
  align-items: center;
  position: relative;
`;

export const CheckBoxStyled = styled.input<{ $checked: boolean }>`
  appearance: none;
  height: 1.3rem;
  width: 1.3rem;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: ${(props) => (props.$checked ? '"X"' : '')};
    color: white;
    margin: auto;
  }
  &:checked {
    background-color: ${(props) => props.theme.secondary};
  }
`;

export const SpanStyled = styled.span<{ $lineThrough: boolean }>`
  font-weight: bold;
  font-size: larger;
  margin-left: 20px;
  cursor: pointer;
  user-select: none;
  text-decoration: ${(props) => (props.$lineThrough ? 'line-through' : '')};
`;
