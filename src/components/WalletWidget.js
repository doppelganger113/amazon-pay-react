/* global OffAmazonPayments */
import React, {PureComponent} from 'react';
import PropTypes              from 'prop-types';

const DEFAULT_STYLE = {
  width:  '400px',
  height: '260px',
};

const AMAZON_WALLET_WIDGET_DIV_ID = 'walletWidgetDiv';

class WalletWidget extends PureComponent {

  constructor(props) {
    super(props);

    this.onPaymentSelect = this.onPaymentSelect.bind(this);
    this.onError = this.onError.bind(this);
  }

  componentDidMount() {
    const {sellerId} = this.props;

    new OffAmazonPayments.Widgets.Wallet({
      sellerId,
      design:          { designMode: 'responsive' },
      onPaymentSelect: this.onPaymentSelect,
      onError:         this.onError,
    }).bind(AMAZON_WALLET_WIDGET_DIV_ID);
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
    const {style} = this.props;

    return <div id={AMAZON_WALLET_WIDGET_DIV_ID} style={WalletWidget.getStyle(style)}/>;
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
