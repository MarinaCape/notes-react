import { fireEvent, render, screen } from '@testing-library/react';
import NoteItemComponent from './note-item.component';
import { Note } from '../../../../models/note';
import { useModifyNote } from '../../../../hooks/useNotes';

jest.mock('../../../../hooks/useNotes', () => ({
  useModifyNote: jest.fn(),
}));

export const noteMock: Note = {
  id: '0',
  title: 'title',
  description: 'description',
  finished: false,
};

describe('note-item', () => {
  const mockMutateAsync = jest.fn().mockResolvedValue({});
  const mockButtonCallback = jest.fn();

  beforeEach(() => {
    (useModifyNote as jest.Mock).mockReturnValue({
      mutateAsync: mockMutateAsync,
    });
    jest.clearAllMocks();
    render(<NoteItemComponent note={noteMock} updateNoteCallback={mockButtonCallback} deleteNoteCallback={mockButtonCallback} />);
  });

  it('should render properly the component', () => {
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('Update')).toBeInTheDocument();
    expect(screen.getByText('Remove')).toBeInTheDocument();
  });

  it('should call mutateAsync when check checkbox', () => {
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockMutateAsync).toHaveBeenCalledWith({ ...noteMock, finished: true });
  });

  it('should show/hide description when arrow is clicked', () => {
    const arrow = screen.getByTestId('arrow-button');
    fireEvent.click(arrow);
    expect(screen.getByText(noteMock.description)).toBeInTheDocument();
    fireEvent.click(arrow);
    expect(screen.queryByText(noteMock.description)).not.toBeInTheDocument();
  });

  it('should call updateNoteCallback when update button is clicked ', () => {
    const button = screen.getByText('Update');
    fireEvent.click(button);
    expect(mockButtonCallback).toHaveBeenCalled();
  });

  it('should call deleteNoteCallback when update button is clicked ', () => {
    const button = screen.getByText('Remove');
    fireEvent.click(button);
    expect(mockButtonCallback).toHaveBeenCalledWith(noteMock?.id);
  });
});
