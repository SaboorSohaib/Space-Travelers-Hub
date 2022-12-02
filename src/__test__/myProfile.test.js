import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/configureStore";
import ProfileSection from '../components/profileSection';

it('It should render compnnets correctlt', () => {
    const section = render(
        <Provider store={store}>
            <ProfileSection />
        </Provider>,
    );
    expect(section).toMatchSnapshot();
});
