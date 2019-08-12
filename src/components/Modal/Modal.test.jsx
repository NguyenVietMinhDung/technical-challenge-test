import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import gifImgUrl from '../../assets/giphy.gif';
import Modal from './Modal';

const defaultProps = {
  selectedImgUrl: gifImgUrl,
  isVisible: true,
  toggleModal: jest.fn(),
};

describe('<Modal />', () => {
  test('renders correctly', () => {
    const component = shallow(<Modal {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
  test('handle click event', () => {
    const component = mount(<Modal {...defaultProps} />);
    component.find('div:first-child').simulate('click');
    component.setProps({ isVisible: false, selectedImgUrl: null });
    expect(component.props().toggleModal).toBeCalledWith(null);
  });
});
