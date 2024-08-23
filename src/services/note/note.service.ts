import { Note } from '../../models/note';
import { notesResponseMapper } from './note.mapper';
import { NoteResponse } from './note.model';
import { Endpoints } from '../core/http.endpoints';
import { httpRequest } from '../core/http.service';

export const fetchNotes = async (): Promise<Note[]> => {
  const response = await httpRequest<NoteResponse[]>({ method: 'get', url: Endpoints.notes });
  return notesResponseMapper(response);
};

export const modifyNote = async (note: Note): Promise<Note> =>
  await httpRequest<Note>({ method: 'put', url: Endpoints.noteById, params: { noteId: note.id }, body: note });

export const createNote = async (note: Note): Promise<Note> => await httpRequest<Note>({ method: 'post', url: Endpoints.notes, body: note });

export const deleteNote = async (noteId: string): Promise<void> => {
  await httpRequest({ method: 'delete', url: Endpoints.noteById, params: { noteId: noteId } });
};
