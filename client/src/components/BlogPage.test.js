import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogPage from './BlogPage';

test('renders the blog hero content', () => {
  render(<BlogPage />);

  expect(screen.getByText(/Knowledge for a/i)).toBeInTheDocument();
  expect(screen.getByText(/Our Blog/i)).toBeInTheDocument();
});
