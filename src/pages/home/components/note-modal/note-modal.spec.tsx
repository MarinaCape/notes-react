import { fireEvent, render, screen } from '@testing-library/react';
import NoteModalComponent from './note-modal.component';
import { Note } from '../../../../models/note';
import { useCreateNote, useModifyNote } from '../../../../hooks/useNotes';

jest.mock('../../../../hooks/useNotes', () => ({
  useCreateNote: jest.fn(),
  useModifyNote: jest.fn(),
}));

export const noteMock: Note = {
  id: '0',
  title: 'title',
  description: 'description',
  finished: false,
};

describe('note-modal', () => {
  const closeCallback = jest.fn();
  const mockMutateCreate = jest.fn();
  const mockMutateModify = jest.fn();

  beforeEach(() => {
    (useModifyNote as jest.Mock).mockReturnValue({
      mutate: mockMutateModify,
    });
    (useCreateNote as jest.Mock).mockReturnValue({
      mutate: mockMutateCreate,
    });
    jest.clearAllMocks();
  });

  it('should render the component with Create note properly', () => {
    render(<NoteModalComponent show={true} />);

    expect(screen.getByText('Create note')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter note title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Describe your note...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Save note/i })).toBeInTheDocument();
  });

  it('should render the component with Modify note properly', () => {
    render(<NoteModalComponent show={true} note={noteMock} />);

    expect(screen.getByText('Update note')).toBeInTheDocument();
    expect(screen.getByDisplayValue(noteMock.title)).toBeInTheDocument();
    expect(screen.getByDisplayValue(noteMock.description)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Save note/i })).toBeInTheDocument();
  });

  it('should not render the component when show is false', () => {
    render(<NoteModalComponent show={false} />);

    expect(screen.queryByRole('button', { name: /Save note/i })).not.toBeInTheDocument();
  });

  it('should call closeCallback when close button is clicked', () => {
    render(<NoteModalComponent show={true} closeCallback={closeCallback} />);
    const button = screen.getByTestId('close-button');

    fireEvent.click(button);

    expect(closeCallback).toHaveBeenCalledTimes(1);
  });

  it('should call handleSaveButton when save button is clicked', () => {
    render(<NoteModalComponent show={true} note={noteMock} closeCallback={closeCallback} />);

    const button = screen.getByRole('button', { name: /Save note/i });

    fireEvent.click(button);

    expect(mockMutateModify).toHaveBeenCalled();
    expect(mockMutateCreate).not.toHaveBeenCalled();
    expect(closeCallback).toHaveBeenCalled();
  });

  it('should call handleSaveButton to create a new note when save button is clicked and there was not a preview note charged', () => {
    render(<NoteModalComponent show={true} closeCallback={closeCallback} />);

    const inputTitle = screen.getByPlaceholderText('Enter note title');
    const button = screen.getByRole('button', { name: /Save note/i });

    fireEvent.change(inputTitle, { target: { value: 'Title' } });
    fireEvent.click(button);

    expect(mockMutateCreate).toHaveBeenCalledWith({ id: expect.any(String), title: 'Title', description: '', finished: false } as Note);
    expect(closeCallback).toHaveBeenCalled();
  });

  it('should call handleSaveButton to modify the existing notee when save button is clicked', () => {
    render(<NoteModalComponent show={true} note={noteMock} closeCallback={closeCallback} />);

    const inputTitle = screen.getByPlaceholderText('Enter note title');
    const button = screen.getByRole('button', { name: /Save note/i });

    fireEvent.change(inputTitle, { target: { value: 'Modified Title' } });
    fireEvent.click(button);

    expect(mockMutateModify).toHaveBeenCalledWith({
      id: noteMock.id,
      title: 'Modified Title',
      description: noteMock.description,
      finished: noteMock.finished,
    } as Note);
    expect(closeCallback).toHaveBeenCalled();
  });

  it('should not call handleSaveButton when title is empty', () => {
    render(<NoteModalComponent show={true} closeCallback={closeCallback} />);

    const button = screen.getByRole('button', { name: /Save note/i });

    fireEvent.click(button);
    expect(mockMutateCreate).not.toHaveBeenCalled();
    expect(closeCallback).not.toHaveBeenCalled();
  });
});
