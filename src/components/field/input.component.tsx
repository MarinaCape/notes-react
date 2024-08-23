import { InputProps } from './input.model';
import { ImageLeft, InputContainer, InputField } from './input.style';

export const InputComponent = (props: InputProps) => {
  return (
    <InputContainer>
      {props.imageLeft && <ImageLeft src={props.imageLeft} />}
      <InputField
        defaultValue={props.value}
        ref={props.inputRef}
        $backgroundColor={props.backgroundColor}
        placeholder={props.placeholder}
        type={props.type}
        disabled={props.disabled}
        name={props.name}
        onChange={props.onChange}
        $hasImageLeft={Boolean(props.imageLeft)}
      />
    </InputContainer>
  );
};
