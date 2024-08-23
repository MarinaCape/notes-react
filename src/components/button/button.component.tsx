import { ButtonContainer, ImageLeft, ImageRight } from './button.styles';

export interface ButtonProps {
  imageLeft?: string;
  imageRight?: string;
  text: string;
  borderColor?: string;
  backgroundColor?: string;
  hoverColor?: string;
  textColor?: string;
  margin?: string;
  fontSize?: string;
  onClick?: () => void;
}

export const ButtonComponent = (props: ButtonProps) => {
  return (
    <ButtonContainer
      onClick={props.onClick}
      $borderColor={props.borderColor}
      $textColor={props.textColor}
      $backgroundColor={props.backgroundColor}
      $hoverColor={props.hoverColor}
      $margin={props.margin}
      $fontSize={props.fontSize}
    >
      {props.imageLeft && <ImageLeft src={props.imageLeft} />}
      {props.text}
      {props.imageRight && <ImageRight src={props.imageRight} />}
    </ButtonContainer>
  );
};
