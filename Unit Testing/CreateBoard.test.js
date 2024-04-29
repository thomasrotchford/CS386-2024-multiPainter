import React from 'react'; // Import React to use JSX
import { render } from '@testing-library/react';
import CreateBoardPage from './CreateBoard.js';

describe('CreateBoardPage', () => {
  test('renders without crashing', () => {
    render(<CreateBoardPage />);
  });

  test('renders current brush color', () => {
    const { getByText } = render(<CreateBoardPage />);
    const brushElement = getByText(/Current Brush Color/i);
    expect(brushElement).toBeInTheDocument();
  });

  test('renders palette container', () => {
    const { getByText } = render(<CreateBoardPage />);
    const paletteTitle = getByText(/Palette:/i);
    expect(paletteTitle).toBeInTheDocument();
  });

  test('renders board settings', () => {
    const { getByText } = render(<CreateBoardPage />);
    const settingsTitle = getByText(/Board Settings/i);
    expect(settingsTitle).toBeInTheDocument();
  });

  // Add any more tests here guys
});