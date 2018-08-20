import React, {PureComponent} from 'react';
import AmazonAddressBook      from '../../../src/components/AmazonAddressBook';
import {withRouter}           from 'react-router-dom';
import {ROUTES}               from './RouterControllerComponent';
import PropTypes              from 'prop-types';

class AmazonAddressView extends PureComponent {

  constructor(props) {
    super(props);

    this.handleOnReady = this.handleOnReady.bind(this);
    this.handleOnSelectPaymentClick = this.handleOnSelectPaymentClick.bind(
      this);
  }

  handleOnReady(billingAgreement) {
    // We only want to set it the first time
    if (this.props.billingAgreementId) {
      console.log(
        'Not setting billingAgreementId', this.props.billingAgreementId,
        'EMPTY',
      );
      return;
    }
    const billingAgreementId = billingAgreement.getAmazonBillingAgreementId();
    console.log('Setting billingAgreementId', billingAgreementId);
    this.props.onBillingAgreementSelected(billingAgreementId);
  }

  handleOnSelectPaymentClick() {
    console.info('On select payment');
    this.props.history.push(ROUTES.PAYMENT);
  }

  render() {
    return (
      <div>
        <AmazonAddressBook {...this.props}
                           onReady={this.handleOnReady}
                           onError={(err) => console.error(
                             err.getErrorMessage())}
        />
        <button onClick={this.handleOnSelectPaymentClick}>Select payment card
        </button>
      </div>
    );
  }
}

AmazonAddressView.propTypes = {
  onBillingAgreementSelected: PropTypes.func.isRequired,
  billingAgreementId:         PropTypes.string.isRequired,
};

export default withRouter(AmazonAddressView);
