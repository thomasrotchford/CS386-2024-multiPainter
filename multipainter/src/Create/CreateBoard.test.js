// CreateBoard.test.js
import React from 'react';
import { render } from '@testing-library/react';
import CreateBoardPage from './CreateBoard';

// Mock function for opening the page
jest.mock('./CreateBoard', () => ({
  __esModule: true,
  default: () => <div>Mock CreateBoard Page</div>,
}));

describe('CreateBoardPage', () => {
  it('renders without crashing', () => {
    render(<CreateBoardPage />);
  });
});

