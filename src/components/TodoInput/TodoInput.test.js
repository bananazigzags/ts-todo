import React from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { TodoInput } from './TodoInput';
import { rootReducer } from '../../redux/rootReducer';

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState)} = {}) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>), store,
  };
};

describe('redux testing', () => {
  it("checks initial state", () => {
    renderWithRedux(<TodoInput />);
    expect(screen.getByRole("textbox")).toHaveTextContent("");
  })
})