import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import gifImgUrl from '../../assets/giphy.gif';
import App from './App';

const defaultProps = {
  selectedImgUrl: gifImgUrl,
  isVisible: true,
  toggleModal: jest.fn(),
};

describe('<App />', () => {
  test('renders correctly', () => {
    const component = mount(<App {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
