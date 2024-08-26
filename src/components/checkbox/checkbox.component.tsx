import { CheckBoxStyled, LabelContainer, SpanStyled } from './checkbox.styles';

interface CheckboxProps {
  text?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const CheckboxComponent = ({ text, checked, onChange }: CheckboxProps) => {
  return (
    <LabelContainer>
      <CheckBoxStyled type="checkbox" $checked={checked ?? false} checked={checked} onChange={(e) => onChange?.(e.target.checked)} />
      <SpanStyled $lineThrough={checked ?? false}>{text}</SpanStyled>
    </LabelContainer>
  );
};
