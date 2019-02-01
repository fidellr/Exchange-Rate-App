import React from 'react';
import { shallow } from 'enzyme';
import RateCard from './index';
import { convertCurrencyName } from '../../utils/helpers/convertCurrency';

describe('RateCard', () => {
  it('should render converted abbreviation of currency that passed through props and the abbreviation too', () => {
    const component = shallow(<RateCard rateName="SGD" />);
    const convertedAbbrev = convertCurrencyName('SGD');
    expect(component.childAt(0).childAt(1).text()).toContain(convertedAbbrev);
    expect(component).toMatchSnapshot();
  });
});