import { Note } from '../../models/note';
import { NoteResponse } from './note.model';

export const notesResponseMapper = (data: NoteResponse[]): Note[] => data.map((item) => ({ ...item }));
