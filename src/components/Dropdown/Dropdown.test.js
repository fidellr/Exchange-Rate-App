import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './index';

const data = [
  {
    rate_name: 'SGD',
    rate_currency: 11.2213,
  },
  {
    rate_name: 'PLN',
    rate_currency: 22.21134,
  },
  {
    rate_name: 'RUB',
    rate_currency: 33.99823,
  }
];

const selectedItems = data.slice(0, 2);

describe('Dropdown', () => {
  it('should render 3 dropdown items', () => {
    const component = shallow(<Dropdown data={data} selectedItems={selectedItems} />);
    expect(component.children()).toHaveLength(3);
    expect(component).toMatchSnapshot();
  });
});

describe('Dropdown', () => {
  it('should render dropdown item in gray color for the selectedItem', () => {
    const component = shallow(<Dropdown data={data} selectedItems={selectedItems} />);
    const childrens = component.children();
    expect(childrens.filterWhere(c => c.hasClass('u-backgroundColorGrayBlur') === true)).toHaveLength(2);
    expect(component).toMatchSnapshot();
  });
});

describe('Dropdown received props', () => {
  it('should fill selectedItems state with item that passed from props through getDerivedStateFromProps', () => {
    const component = shallow(<Dropdown data={data} />);
    expect(component.state().selectedItems).toBeNull();
    component.setProps({ selectedItems });
    expect(component.state().selectedItems).toHaveLength(2);
  });
});

describe('Dropdown received updated selectedItems from props', () => {
  it('should concat selectedItems state with the updated selectedItems that passed from props through getDerivedStateFromProps', () => {
    const component = shallow(<Dropdown data={data} selectedItems={selectedItems} />);
    expect(component.state().selectedItems).toHaveLength(2);
    const updatedSelectedItems = [...selectedItems, {
      rate_name: 'NZD',
      rate_currency: 12.23113,
    }];
    component.setProps({ selectedItems: updatedSelectedItems });
    expect(component.state().selectedItems).toHaveLength(3);
  });
});