import styled from 'styled-components';

export const ButtonContainer = styled.button<{
  $borderColor?: string;
  $textColor?: string;
  $backgroundColor?: string;
  $hoverColor?: string;
  $margin?: string;
  $fontSize?: string;
}>`
  background-color: ${(props) => (props.$backgroundColor ? `${props.$backgroundColor}` : 'transparent')};
  display: flex;
  font-size: ${(props) => props.$fontSize};
  margin: ${(props) => props.$margin};
  font-family: monospace;
  max-height: 3rem;
  color: ${(props) => (props.$textColor ? `${props.$textColor}` : props.theme.text)};
  align-items: center;
  cursor: pointer;
  padding: 10px;
  border: ${(props) => (props.$borderColor ? `2px solid ${props.$borderColor}` : 'none')};
  border-radius: ${(props) => props.$borderColor && '2px'};
  &:hover {
    background-color: ${(props) => (props.$hoverColor ? `${props.$hoverColor}` : 'transparent')};
  }
`;

export const ImageLeft = styled.img`
  height: 1.2em;
  width: auto;
  margin-right: 15px;
`;

export const ImageRight = styled.img`
  height: 1.2em;
  width: auto;
  margin-left: 15px;
`;
