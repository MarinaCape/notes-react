export interface InputProps {
  value?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  name?: string;
  type: FieldType;
  disabled?: boolean;
  imageLeft?: string;
  backgroundColor?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export enum FieldType {
  text = 'text',
  textArea = 'textArea',
  password = 'password',
  number = 'number',
  email = 'email',
  select = 'select',
  checkbox = 'checkbox',
}
