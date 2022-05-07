import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';
import ReactThreeTestRenderer from '@react-three/test-renderer'
import App from './App';

class ResizeObserver {  observe() {}; unobserve() {};  disconnect() {}; }
window.ResizeObserver = ResizeObserver;

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Github Login Search/i);
  expect(linkElement).toBeInTheDocument();
});
it('test functions', async () => {
  render(<App />);
  const getInfo = screen.getByTestId(/getInfo/i);
  fireEvent.click(getInfo);
  const fakeAutoRotation = screen.getByTestId(/fakeAutoRotation/i);
  fireEvent.click(fakeAutoRotation);
  const reset = screen.getByTestId(/reset/i);
  fireEvent.click(reset);
});

