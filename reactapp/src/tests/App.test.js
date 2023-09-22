import { render, screen } from '@testing-library/react';
import App from '../App';
import World from '../World';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React/i);
  expect(linkElement).toBeInTheDocument();
});

test('test_case02', () => {
  render(<World/>);
  const linkElement = screen.getByText(/This is World Functional Component/i);
  expect(linkElement).toBeInTheDocument();
});

