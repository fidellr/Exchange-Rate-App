import React, { Component } from 'react';
import cls from 'classnames';
import CurrencyInput from 'react-currency-input'
import { convertCurrencyName } from '../../../utils/helpers/convertCurrency';
import RateCard from '../../../components/RateCard';
import AddIcon from '../../../static/icons/add.svg';
import Card from '../../../components/Card';
import Dropdown from '../../../components/Dropdown';
import { isUnique } from '../../../utils/helpers/unique';

class HomeContent extends Component {
  state = {
    currentValue: 10.00,
    selectedRates: null,
    selectedRate: null,
    isDropdownShow: false,
  }

  componentDidMount() {
    const { rates } = this.props;
    const slicedRates = rates.slice(0, 5);
    this.setState({ selectedRates: slicedRates });
  }

  handleChangeCurrency = (value) => {
    if (value.length < 1) {
      this.setState({ currentValue: 10.00 });
      return;
    }
    this.setState({ currentValue: parseFloat(value) });
  }

  toggleShowDropdown = () => {
    const { isDropdownShow } = this.state;
    this.setState({ isDropdownShow: !isDropdownShow });
  }

  handleSubmit = () => {
    const { selectedRates, selectedRate } = this.state;
    if (isUnique(selectedRates, 'rate_name', selectedRate.rate_name)) return;
    this.setState({ selectedRates: [...selectedRates, selectedRate], selectedRate: null });
  }

  handleDropdownChoose = (selectedRate) => this.setState({ selectedRate })

  handleRemove = (rateName) => {
    const { selectedRates } = this.state;
    const updatedRates = selectedRates.filter(item => item.rate_name !== rateName);
    this.setState({ selectedRates: updatedRates });
  }

  renderHeader = () => {
    const { baseCurrency } = this.props
    const { currentValue } = this.state;
    return (
      <React.Fragment>
        <i className="u-fontSize14">{baseCurrency} - {convertCurrencyName(baseCurrency)}</i>
        <div className="u-flex u-justifyContentSpaceBetween u-marginTop6 u-marginBottom0">
          <h3 className="u-margin0">{baseCurrency}</h3>
          <CurrencyInput
            className="currencyInput u-outlineNone u-textAlignRight u-backgroundColorWhite"
            value={currentValue}
            decimalSeparator="."
            thousandSeparator=","
            precision="4"
            onChangeEvent={(e) => this.handleChangeCurrency(e.target.value)}
          />
        </div>
      </React.Fragment>
    )
  }

  renderRateCard = (rates) => {
    const { currentValue } = this.state;
    const { baseCurrency } = this.props;
    return rates && rates.map((item, index) => (
      <div
        key={`rateCard-${item.rate_name}-${Math.random()}-${index}`}
        className={cls('u-border1 u-borderColorGray u-borderRadius2', {
          'u-marginTop16': index !== 0,
        })}
      >
        <RateCard
          onRemove={() => this.handleRemove(item.rate_name)}
          currentBaseValue={currentValue}
          baseCurrency={baseCurrency}
          rateName={item.rate_name}
          rateNumber={item.rate_currency}
        />
      </div>
    ));
  }

  render() {
    const { rates } = this.props;
    const { selectedRates, selectedRate, isDropdownShow } = this.state;

    return (
      <div className="homePage-container u-relative u-paddingBottom10 u-backgroundColorGray">
        <div className="homePage-header u-boxShadowBottom u-zIndex7 u-fixed u-padding16 u-backgroundColorWhite">
          {this.renderHeader()}
        </div>
        <div className="homePage-content u-paddingTop90 u-paddingBottom10 u-paddingHorizontal16">
          {rates && this.renderRateCard(selectedRates)}
        </div>
        <Card className={cls('homePage-bottomInputContainer u-border1 u-borderColorGray u-flex u-justifyContentSpaceBetween u-fontSize14 u-marginHorizontal16 u-backgroundColorWhite', {
          'u-marginBottom16': !isDropdownShow,
        })}>
          <div className="u-cursorPointer u-padding10 u-flex" onClick={this.toggleShowDropdown}>
            <div className="addMore-icon u-backgroundNoRepeat u-backgroundSizeCover u-size24 u-marginAuto" style={{ background: `url(${AddIcon})` }} />
            <div className="addMore-text u-marginAuto u-paddingLeft10">
              {!selectedRate ? `Add More Currencies` : selectedRate.rate_name}
            </div>
          </div>
          {
            selectedRate && (
              <div
                className="u-cursorPointer u-padding14 u-borderLeft u-borderLeftColorGray1 u-sizeFullHeight"
                onClick={this.handleSubmit}
              >
                SUBMIT
            </div>
            )
          }
        </Card>
        {
          isDropdownShow && (
            <Dropdown
              onClick={this.handleDropdownChoose}
              data={rates}
              selectedItems={selectedRates}
            />
          )
        }
      </div>
    )
  }
}

export default HomeContent;