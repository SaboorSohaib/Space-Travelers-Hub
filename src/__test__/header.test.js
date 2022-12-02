import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from 'react-router-dom';
import Header from '../components/header';

it('It should render the component correctly', () => {
    const header = render(
        <Router>
          <Header /> 
        </Router>,
      );
      expect(header).toMatchSnapshot();
});
