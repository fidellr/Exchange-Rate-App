import React, { Component } from 'react';
import HomeContent from './HomeContent';
import { fetchExchangeRate } from '../../utils/apiServices/exchangeRateService';
import './index.css';

class HomeScreen extends Component {
  state = {
    baseCurrency: 'USD',
    rates: null,
  }

  async componentDidMount() {
    const { baseCurrency } = this.state;
    const { data } = await fetchExchangeRate(baseCurrency);
    const { rates } = data;
    const formattedRates = this.formatRateData(rates)
    this.setState({ rates: formattedRates });
  }

  formatRateData = (rates) => {
    const rateKeys = Object.keys(rates);
    const reducedRates = rateKeys.reduce((all, rateKey) => {
      return all.concat({
        rate_name: rateKey,
        rate_currency: rates[rateKey],
      })
    }, []);
    return reducedRates;
  }

  render() {
    const { rates, baseCurrency } = this.state;
    return (
      <div className="homePage-wrapper u-marginAuto">
        {
          rates && (
            <HomeContent rates={rates} baseCurrency={baseCurrency} />
          )
        }
      </div>
    )
  }
}

export default HomeScreen;