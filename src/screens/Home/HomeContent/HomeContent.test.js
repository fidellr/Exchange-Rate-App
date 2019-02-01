import React from 'react';
import { shallow } from "enzyme";
import HomeContent from './index';

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

describe('HomeContent', () => {
  it('should fill selectedRates as the default data that passed from props by its parent', () => {
    const component = shallow(<HomeContent baseCurrency="USD" rates={data} />);
    expect(component.state().selectedRates).toHaveLength(3);
    expect(component).toMatchSnapshot();
  });
});

describe('HomeContent change currency event', () => {
  it('should change currentValue state with the parsed value from react-currency', () => {
    const component = shallow(<HomeContent baseCurrency="USD" rates={data} />);
    expect(component.state().currentValue).toEqual(10.00);
    component.instance().handleChangeCurrency('33.2112');
    expect(component.state().currentValue).toEqual(33.2112);
  });
});

describe('HomeContent show dropdown event', () => {
  it('should set isDropdownShow state to show/ dropdown', () => {
    const component = shallow(<HomeContent baseCurrency="USD" rates={data} />);
    expect(component.state().isDropdownShow).toBeFalsy();
    component.instance().toggleShowDropdown();
    expect(component.state().isDropdownShow).toBeTruthy();
  });
});

describe('HomeContent submit currencyName handler fired', () => {
  it('should merge selectedRates when selectedRate filled after choosing dropdown item', () => {
    const component = shallow(<HomeContent baseCurrency="USD" rates={data} />);
    const selectedRate = { rate_name: 'SEK', rate_currency: 21.3321 };

    component.instance().handleDropdownChoose(selectedRate);
    expect(component.state().selectedRate).toEqual(selectedRate);

    component.instance().handleSubmit();
    expect(component.state().selectedRate).toBeNull();
    expect(component.state().selectedRates).toEqual([...data, selectedRate]);
  });
});

describe('HomeContent remove currency handler', () => {
  it('should remove speicific currency on existing selectedRate state', () => {
    const component = shallow(<HomeContent baseCurrency="USD" rates={data} />);

    component.instance().handleRemove('SGD');
    const mockRemovedPropertyFromSelectedRates = data.filter(item => item.rate_name !== 'SGD');
    expect(component.state().selectedRates).toEqual(mockRemovedPropertyFromSelectedRates);
  });
});
