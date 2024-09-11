import { ButtonComponent } from '../../../../components/button/button.component';
import { CheckboxComponent } from '../../../../components/checkbox/checkbox.component';
import { Description, InfoContainer, NoteItemContainer, RightContainer, WrapperArrow } from './note-item.styles';
import { Note } from '../../../../models/note';
import { useModifyNote } from '../../../../hooks/useNotes';
import { useState } from 'react';
import { IoIosArrowDown as ArrowDownIcon, IoIosArrowUp as ArrowUpIcon } from 'react-icons/io';
import { BaseTheme } from '../../../../styles/theme';

interface NoteItemProps {
  note: Note;
  updateNoteCallback?: () => void;
  deleteNoteCallback?: (nodeId: string) => void;
}

const NoteItemComponent = ({ note, deleteNoteCallback, updateNoteCallback }: NoteItemProps) => {
  const { mutateAsync } = useModifyNote();
  const [finished, setFinished] = useState(note.finished);
  const [showDescription, setShowDescription] = useState(false);

  const onChangeCheckbox = (checked: boolean) => {
    setFinished(checked);
    mutateAsync({ ...note, finished: checked }).catch(() => (note.finished = !note.finished));
  };

  const handleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <NoteItemContainer>
      <InfoContainer>
        <CheckboxComponent text={note.title} checked={finished} onChange={onChangeCheckbox} />
        {note.description && showDescription && <Description $lineThrough={finished}>{note.description}</Description>}
      </InfoContainer>
      <RightContainer>
        {note.description && (
          <WrapperArrow data-testid="arrow-button" onClick={handleShowDescription}>
            {showDescription ? <ArrowUpIcon size={25} /> : <ArrowDownIcon size={25} />}
          </WrapperArrow>
        )}
        <ButtonComponent
          onClick={updateNoteCallback}
          text="Update"
          margin="10px"
          backgroundColor={BaseTheme.secondary}
          hoverColor={BaseTheme.accent}
          borderColor={BaseTheme.accent}
          fontSize="1rem"
        />
        <ButtonComponent
          onClick={() => deleteNoteCallback?.(note.id)}
          text="Remove"
          margin="10px"
          backgroundColor={BaseTheme.secondary}
          hoverColor={BaseTheme.accent}
          borderColor={BaseTheme.accent}
          fontSize="1rem"
        />
      </RightContainer>
    </NoteItemContainer>
  );
};

export default NoteItemComponent;
