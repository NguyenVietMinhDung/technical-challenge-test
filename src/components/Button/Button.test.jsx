import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const defaultProps = {
  btnTxt: 'LOAD MORE',
  handleClickEvent: jest.fn(),
};

describe('<Button />', () => {
  test('renders correctly', () => {
    const component = shallow(<Button {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
