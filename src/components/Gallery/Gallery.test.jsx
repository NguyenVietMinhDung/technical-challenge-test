import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './Gallery';

describe('<Gallery />', () => {
  test('renders correctly', () => {
    const component = shallow(<Gallery />);
    expect(component).toMatchSnapshot();
  });
});
