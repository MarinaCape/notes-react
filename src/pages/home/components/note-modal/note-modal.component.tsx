import { useRef } from 'react';
import { ButtonComponent } from '../../../../components/button/button.component';
import { InputComponent } from '../../../../components/field/input.component';
import { FieldType } from '../../../../components/field/input.model';
import { Note } from '../../../../models/note';
import { LabelStyled, ModalBackground, ModalContainer, TextAreaStyled, Title, Wrapper, WrapperIconClose } from './note-modal.styles';
import { v4 as uuidv4 } from 'uuid';
import { useCreateNote, useModify } from '../../../../hooks/useNotes';
import { IoCloseSharp as CloseIcon } from 'react-icons/io5';
import { BaseTheme } from '../../../../styles/theme';

interface NoteModalComponent {
  show?: boolean;
  note?: Note;
  closeCallback?: () => void;
}

export const NoteModalComponent = ({ note, show, closeCallback }: NoteModalComponent) => {
  const { mutate: createNote } = useCreateNote();
  const { mutate: modifyNote } = useModify();
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const inputDescriptionRef = useRef<HTMLTextAreaElement>(null);
  if (!show) return;

  const handleSaveButton = () => {
    if (!!inputTitleRef.current?.value) {
      const noteData = {
        id: note?.id ?? uuidv4(),
        title: inputTitleRef.current?.value,
        description: inputDescriptionRef.current?.value ?? '',
        finished: note?.finished ?? false,
      };

      !!note ? modifyNote(noteData) : createNote(noteData);

      closeCallback?.();
    }
  };

  return (
    <ModalBackground onClick={closeCallback}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <WrapperIconClose>
          <CloseIcon onClick={closeCallback} color={BaseTheme.text} size={30} cursor={'pointer'} />
        </WrapperIconClose>
        <Title>{!!note ? 'Update note' : 'Create note'}</Title>
        <LabelStyled>Title</LabelStyled>
        <Wrapper>
          <InputComponent
            value={note?.title ?? ''}
            inputRef={inputTitleRef}
            placeholder="Enter note title"
            type={FieldType.text}
            backgroundColor="#ece2d5"
          />
        </Wrapper>
        <LabelStyled>Description</LabelStyled>
        <TextAreaStyled defaultValue={note?.description ?? ''} ref={inputDescriptionRef} placeholder="Describe your note..." rows={4} cols={20} />
        <Wrapper>
          <ButtonComponent
            onClick={handleSaveButton}
            text="Save note"
            hoverColor={BaseTheme.accent}
            backgroundColor={BaseTheme.secondary}
            borderColor={BaseTheme.accent}
          />
        </Wrapper>
      </ModalContainer>
    </ModalBackground>
  );
};
