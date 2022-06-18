import React from 'react';
import { screen, render, getByRole } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import App from './App';

describe("app component", () => {

  it('renders app', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    ); 
    expect(container).toMatchSnapshot();
  });

  it('renders app name', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const heading = screen.getByText(/дела/i); 
    expect(heading).toBeInTheDocument();
  });

  it('renders three filters', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    screen.debug()
    const filters = screen.getAllByRole("listitem"); 
    expect(filters.length).toBe(3);
  });

  it('renders input box', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputBox = screen.getByRole("textbox"); 
    expect(inputBox).toBeInTheDocument();
  });

})