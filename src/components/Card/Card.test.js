import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('Card', () => {
  it('should render with default className as it specified', () => {
    const component = shallow(<Card className="cardTest-clsName" />);
    expect(component.hasClass('u-boxShadowBottom u-borderRadius2 cardTest-clsName')).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});

