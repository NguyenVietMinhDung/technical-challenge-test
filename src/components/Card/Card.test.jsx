import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import gifImgUrl from '../../assets/giphy.gif';
import Card from './Card';

const defaultProps = {
  link: 'https://developers.giphy.com/docs',
  imgUrl: gifImgUrl,
  avatarUrl: gifImgUrl,
  username: 'Dung VM Nguyen',
  toggleModal: jest.fn(),
};

describe('<Modal />', () => {
  test('renders correctly', () => {
    const component = shallow(<Card {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
  test('handle click event', () => {
    const component = mount(<Card {...defaultProps} />);
    component.find('.card-body > img').simulate('click');
    expect(component.props().toggleModal).toBeCalledWith(component.props().imgUrl);
  });
});
