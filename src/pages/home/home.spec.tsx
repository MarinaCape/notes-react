import { fireEvent, render, screen } from '@testing-library/react';
import Home from './home.page';
import { Note } from '../../models/note';
import { configureStore } from '@reduxjs/toolkit';
import { Theme } from '../../styles/theme.model';
import { useAppDispatch, useAppSelector } from '../../store/root.hooks';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BaseTheme } from '../../styles/theme';
import { useNotes } from '../../hooks/useNotes';

jest.mock('../../store/root.hooks', () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

jest.mock('../../hooks/useNotes', () => ({
  useNotes: jest.fn(),
  useDeleteNote: jest.fn(() => ({
    mutate: jest.fn(),
  })),
  useCreateNote: jest.fn(() => ({
    mutate: jest.fn(),
  })),
  useModifyNote: jest.fn(() => ({
    mutate: jest.fn(),
  })),
}));

const mockStore = configureStore({
  reducer: {
    theme: () => ({
      theme: Theme.light,
    }),
  },
});

const noteList: Note[] = [
  {
    id: '0',
    title: 'Title 1',
    description: '',
    finished: true,
  },
  {
    id: '1',
    title: 'Title 2',
    description: '',
    finished: true,
  },
];

describe('home', () => {
  const renderHomeComponent = () =>
    render(
      <Provider store={mockStore}>
        <ThemeProvider theme={BaseTheme}>
          <Home />
        </ThemeProvider>
      </Provider>,
    );

  const mockUseNote = (mockImplementation: { notes: Note[]; isLoading: boolean; isError: boolean }) => {
    (useNotes as jest.Mock).mockImplementation(() => mockImplementation);
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useAppSelector as unknown as jest.Mock).mockReturnValue(Theme.light);
    (useAppDispatch as unknown as jest.Mock).mockReturnThis();

    mockUseNote({
      notes: noteList,
      isLoading: false,
      isError: false,
    });
    renderHomeComponent();
  });

  afterAll(() => {
    jest.resetModules();
  });

  it('should render component properly with the notes list', () => {
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Title 2')).toBeInTheDocument();
  });

  it('should show modal component when new note button is clicked', () => {
    fireEvent.click(screen.getByText('New Note'));
    expect(screen.getByText('Create note')).toBeInTheDocument();
  });

  it('should show loading messaging when loading', () => {
    mockUseNote({
      notes: [],
      isLoading: true,
      isError: false,
    });
    renderHomeComponent();

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should show error messaging when data fetching fails', () => {
    mockUseNote({
      notes: [],
      isLoading: false,
      isError: true,
    });

    renderHomeComponent();
    expect(screen.getByText('Something when wrong.')).toBeInTheDocument();
  });
});
