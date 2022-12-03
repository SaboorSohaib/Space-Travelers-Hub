import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/rockets';
import ShowRockets from '../components/showRockets';

describe('Rockets', () => {
  it('Rockets component is rendered correctly', () => {
    const rockets = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(rockets).toMatchSnapshot();
  });

  it('ShowRockets component is rendered correctly', () => {
    const showRockets = render(
      <Provider store={store}>
        <ShowRockets />
      </Provider>,
    );
    expect(showRockets).toMatchSnapshot();
  });
});
