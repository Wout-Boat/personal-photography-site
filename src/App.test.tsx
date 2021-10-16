import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";

test('Navigation is Present', async () => {
  render(<App />);
  const navigationElements = await screen.findAllByText('Climate Strike Denver');
  expect(navigationElements).toHaveLength(2);
});

test('Images are present', async () => {
  render(<App />);
  const imageelement = await screen.findByAltText('000003550017.jpg');
  expect(imageelement).toBeInTheDocument();
});
