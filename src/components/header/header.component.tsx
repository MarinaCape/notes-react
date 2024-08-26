import { InputComponent } from '../field/input.component';
import { FieldType } from '../field/input.model';
import { DivRow, HeaderContainer, Title } from './header.styles';
import SearchIcon from '../../assets/ic-search.svg';
import PlusIcon from '../../assets/ic-plus.svg';
import { ButtonComponent } from '../button/button.component';
import { useAppDispatch, useAppSelector } from '../../store/root.hooks';
import { selectTheme, setTheme } from '../../store/states/theme.slice';
import { Theme } from '../../styles/theme.model';
import { useState } from 'react';

interface HeaderProps {
  onSearchCallback?: (text: string) => void;
  onNewNoteCallback?: () => void;
}
export const HeaderComponent = ({ onSearchCallback, onNewNoteCallback }: HeaderProps) => {
  const themeSelector = useAppSelector(selectTheme);
  const [lightMode, setLightMode] = useState(themeSelector === Theme.light);
  const dispatch = useAppDispatch();

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchCallback?.(e.target.value);
  };

  const onClickUiMode = () => {
    dispatch(setTheme(lightMode ? Theme.dark : Theme.light));
    setLightMode(!lightMode);
  };

  return (
    <HeaderContainer>
      <DivRow>
        <Title>Notes</Title>
        <InputComponent placeholder="Search notes..." type={FieldType.text} imageLeft={SearchIcon} onChange={onChangeSearch} />
      </DivRow>
      <ButtonComponent onClick={onClickUiMode} text={lightMode ? 'Dark Mode' : 'Light Mode'} fontSize="1.2rem" />
      <ButtonComponent onClick={onNewNoteCallback} text="New Note" imageLeft={PlusIcon} fontSize="1.2rem" />
    </HeaderContainer>
  );
};

export default HeaderComponent;
