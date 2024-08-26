import { useState } from 'react';
import HeaderComponent from '../../components/header/header.component';
import { useDeleteNote, useNotes } from '../../hooks/useNotes';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { CenterContainer, HomeContainer, LabelStyled, NoteListContainer } from './home.styles';
import { NoteModalComponent } from './components/note-modal/note-modal.component';
import { Note } from '../../models/note';
import { useAppSelector } from '../../store/root.hooks';
import { selectTheme } from '../../store/states/theme.slice';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles/theme.model';
import { BaseTheme, DarkTheme } from '../../styles/theme';

export const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [noteSelected, setNoteSelected] = useState<Note | undefined>(undefined);
  const { notes, isLoading, isError } = useNotes();
  const { mutate: deleteNote } = useDeleteNote();
  const themeSelected = useAppSelector(selectTheme);

  const handleNewNoteCallback = () => {
    setShowModal(true);
  };

  const handleCloseModalCallback = () => {
    setNoteSelected(undefined);
    setShowModal(false);
  };

  const handleUpdateNoteCallback = (note: Note) => {
    setNoteSelected(note);
    setShowModal(true);
  };

  const handleDeleteNoteCallback = (noteId: string) => {
    deleteNote(noteId);
  };

  return (
    <ThemeProvider theme={themeSelected === Theme.light ? BaseTheme : DarkTheme}>
      <HomeContainer>
        <HeaderComponent onSearchCallback={setSearchText} onNewNoteCallback={handleNewNoteCallback} />
        {(isLoading || isError) && (
          <CenterContainer>
            {isLoading && <LabelStyled>Loading...</LabelStyled>}
            {isError && <LabelStyled>Ha ocurrido un error en la carga de datos.</LabelStyled>}
          </CenterContainer>
        )}
        {!isLoading && !isError && (
          <NoteListContainer>
            {notes
              ?.filter((note) => note.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
              .map((note) => (
                <NoteItemComponent
                  updateNoteCallback={() => handleUpdateNoteCallback(note)}
                  deleteNoteCallback={handleDeleteNoteCallback}
                  key={note.id}
                  note={note}
                />
              ))}
          </NoteListContainer>
        )}
        <NoteModalComponent note={noteSelected} closeCallback={handleCloseModalCallback} show={showModal} />
      </HomeContainer>
    </ThemeProvider>
  );
};
