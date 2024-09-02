import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createNote, deleteNote, fetchNotes, modifyNote } from '../services/note/note.service';
import { Note } from '../models/note';

export const useNotes = () => {
  const { isLoading, data: notes, isError } = useQuery({ queryKey: ['notes'], queryFn: fetchNotes });
  return {
    isLoading,
    notes,
    isError,
  };
};

export const useModifyNote = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (note: Note) => {
      return modifyNote(note);
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['notes'], exact: true });
    },
  });
};

export const useCreateNote = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (note: Note) => {
      return createNote(note);
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['notes'], exact: true });
    },
  });
};

export const useDeleteNote = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (noteId: string) => deleteNote(noteId),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['notes'], exact: true });
    },
  });
};
