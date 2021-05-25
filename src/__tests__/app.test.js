import React from 'react';
import App from '../App';
import People from '../people';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

it('Should render a list of characters', async () => {
  const people = {
    "Luke Skywalker":"https://swapi.dev/api/people/1/",
    "Darth Vader":"https://swapi.dev/api/people/4/"
  }

  render(<People people={people} />);

  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(2);
  expect(items[0]).toHaveTextContent('Luke Skywalker');
  expect(items[1]).toHaveTextContent('Darth Vader');
  expect(items[0]).toContainHTML('<a href="https://swapi.dev/api/people/1/">Luke Skywalker</a>');

});