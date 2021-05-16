/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

test('renders loading component', () => {
  render(<Loading />);
  const loadingElement = screen.getByText('loading', { exact: false });
  expect(loadingElement).toBeInTheDocument();
});
