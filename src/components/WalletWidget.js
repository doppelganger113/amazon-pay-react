/* global OffAmazonPayments */
import React, {PureComponent} from 'react';
import PropTypes              from 'prop-types';

const DEFAULT_STYLE = {
  width:  '400px',
  height: '260px',
};

class WalletWidget extends PureComponent {

  constructor(props) {
    super(props);

    this.onPaymentSelect = this.onPaymentSelect.bind(this);
    this.onError = this.onError.bind(this);
  }

  componentDidMount() {
    const {sellerId, style} = this.props;

    new OffAmazonPayments.Widgets.Wallet({
      sellerId,
      design:          {size: WalletWidget.getStyle(style)},
      onPaymentSelect: this.onPaymentSelect,
      onError:         this.onError,
    }).bind('walletWidgetDiv');
  }

  /**
   * @description Replace this code with the action that you want to perform
   * after the payment method is chosen. Ideally this would enable the next
   * action for the buyer including either a "Continue" or "Place Order" button.
   *
   * @param orderReference
   */
  onPaymentSelect(orderReference) {
    const {onPaymentSelect} = this.props;
    onPaymentSelect && onPaymentSelect(orderReference);
  }

  /**
   * @description During development you can use the following code to view
   * error messages:
   * console.log(error.getErrorCode() + ': ' + error.getErrorMessage());
   * See "Handling Errors" for more information.
   *
   * @param err
   */
  onError(err) {
    const {onError} = this.props;
    onError && onError(err);
  }

  render() {
    return <div id='walletWidgetDiv'/>;
  }
}

/**
 *
 * @param {object} style
 * @return {object}
 */
WalletWidget.getStyle = (style) => {
  return typeof style === 'object' ? style : DEFAULT_STYLE;
};

WalletWidget.propTypes = {
  sellerId:        PropTypes.string.isRequired,
  onPaymentSelect: PropTypes.func,
  onError:         PropTypes.func,
  style:           PropTypes.object,
};

export default WalletWidget;
