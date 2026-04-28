import { render, screen } from '@testing-library/react';
import TreeView from './TreeView';

test('renders learn react link', () => {
  render(<TreeView />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
