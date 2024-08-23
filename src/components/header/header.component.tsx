import { InputComponent } from '../field/input.component';
import { FieldType } from '../field/input.model';
import { DivRow, HeaderContainer, Title } from './header.styles';
import SearchIcon from '../../assets/ic-search.svg';
import PlusIcon from '../../assets/ic-plus.svg';
import { ButtonComponent } from '../button/button.component';

interface HeaderProps {
  onSearchCallback?: (text: string) => void;
  onNewNoteCallback?: () => void;
}
export const HeaderComponent = ({ onSearchCallback, onNewNoteCallback }: HeaderProps) => {
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchCallback?.(e.target.value);
  };
  return (
    <HeaderContainer>
      <DivRow>
        <Title>Notes</Title>
        <InputComponent placeholder="Search notes..." type={FieldType.text} imageLeft={SearchIcon} onChange={onChangeSearch} />
      </DivRow>
      <ButtonComponent onClick={onNewNoteCallback} text="New Note" imageLeft={PlusIcon} fontSize="1.2rem" />
    </HeaderContainer>
  );
};

export default HeaderComponent;
