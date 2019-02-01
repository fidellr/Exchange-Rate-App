import React from 'react';
import { convertCurrencyName } from '../../utils/helpers/convertCurrency';
import RemoveIcon from '../../static/icons/remove.svg';
import Card from '../Card';

const rateDetailClasses = 'u-margin0 u-fontSize16';
export default ({
  onRemove,
  baseCurrency,
  currentBaseValue,
  rateName,
  rateNumber,
}) => (
    <Card className="rateCard-wrapper u-flex u-justifyContentSpaceBetween u-backgroundColorWhite">
      <div className="rateCard-details u-sizeFullWidth u-padding4">
        <div className="rateCard-detailHeader u-flex u-justifyContentSpaceBetween">
          <p className={rateDetailClasses}>{rateName}</p>
          <p className={rateDetailClasses}>{(rateNumber * currentBaseValue).toFixed(4)}</p>
        </div>
        <p className="u-margin0 u-fontSize12 u-fontWeight7 u-marginVertical4">{`${rateName}-${convertCurrencyName(rateName)}`}</p>
        <p className="u-margin0 u-fontSize12 u-fontWeight7 u-marginVertical4">1 {baseCurrency} = {rateName} {rateNumber}</p>
      </div>
      <div className="rateCard-button u-width50 u-borderLeftColorGray1 u-relative">
        <div
          className="deleteButton u-cursorPointer u-absolute u-top0 u-bottom0 u-right0 u-left0 u-backgroundSizeCover u-backgroundNoRepeat u-size24 u-marginAuto"
          onClick={onRemove}
          style={{ backgroundImage: `url(${RemoveIcon})` }}
        />
      </div>
    </Card>
  );
