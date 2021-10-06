import { render, screen } from '@testing-library/react';
import App from './App';

test('renders food app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mi app de comida/i);
  expect(linkElement).toBeInTheDocument();
});
