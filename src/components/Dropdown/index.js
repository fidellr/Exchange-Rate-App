import React from 'react';
import cls from 'classnames';
import { isUnique } from '../../utils/helpers/unique';


class Dropdown extends React.Component {
  state = {
    selectedItems: null,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { selectedItems } = nextProps;
    if (selectedItems) {
      if (!prevState.selectedItems) {
        return { selectedItems }
      }
      if (selectedItems.length !== prevState.selectedItems.length) {
        return { selectedItems }
      }
    }

    return null;
  }

  render() {
    const { data, onClick } = this.props;
    const { selectedItems } = this.state;

    return (
      <div className="dropdown-container u-boxShadowBottom u-marginHorizontal16 u-borderRadius2 u-borderColorGray u-border1 u-marginBottom16 u-backgroundColorWhite">
        {
          data && data.map((item, index) => (
            <div
              key={`dropdownItem-${item.rate_name}`}
              onClick={() => onClick(item)}
              className={cls('dropdown-item u-cursorPointer u-padding4', {
                'u-backgroundColorGrayBlur': (selectedItems && isUnique(selectedItems, 'rate_name', item.rate_name)) === true,
                'u-borderBottomColorGray': index !== data.length - 1,
              })}
            >
              {item.rate_name}
            </div>
          ))
        }
      </div>
    )
  }

}

export default Dropdown;
