import { render } from "@testing-library/react";
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Dragon from "../components/dragons/Dragon";
import Dragons from "../components/dragons/dragons";
import { bookDragon, cancelBooking, getDragons } from "../redux/dragons/dragons";

describe('Dragons', () => {
  it('Dragon component is rendered correctly', () => {
    const dragon = render(
      <Provider store={store}>
        <Dragon />
      </Provider>,
    );
    expect(dragon).toMatchSnapshot();
  });

  it('Dragons component is rendered correctly', () => {
    const dragons = render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );
    expect(dragons).toMatchSnapshot();
  });

  it('should return an action with type GET_DRAGONS', () => {
    const data = [
      {
        id: 1,
        name: 'Dragon1',
        description: 'description of the first one',
        flickr_images: [],
      },
    ];
    const action = getDragons(data);
    expect(action.type).toBe('GET_DRAGONS');
  });

  it('should return an action with type BOOK_DRAGON', () => {
    const id = 1;
    const action = bookDragon(id);
    expect(action.type).toBe('BOOK_DRAGON');
  });

  it('should should return an action with type CANCEL_BOOKING', () => {
    const id = 1;
    const action = cancelBooking(id);
    expect(action.type).toBe('CANCEL_BOOKING');
  });
});
