import React, {Component} from 'react';
import WalletWidget       from '../../../src/components/WalletWidget';
import ConsentWidget      from '../../../src/components/ConsentWidget';

class AmazonPaymentView extends Component {

  constructor(props) {
    super(props);

    this.handleError = this.handleError.bind(this);
    this.handlePaymentSelect = this.handlePaymentSelect.bind(this);
  }

  handleError(err) {
    console.log(err.getErrorMessage());
  }

  handlePaymentSelect(o) {
    console.log('Selected', o);
  }

  render() {
    const {billingAgreementId} = this.props;

    return (
      <div>
        <WalletWidget {...this.props}
                      onError={this.handleError}
                      onPaymentSelect={this.handlePaymentSelect}
        />
        {billingAgreementId &&
         <ConsentWidget {...this.props}
                        amazonBillingAgreementId={billingAgreementId}
                        onError={(err) => console.log(err)}
                        onReady={() => console.log('Consent ready')}
                        onConsent={(hasConsent) => console.info('Has consent', hasConsent)}
         />}
      </div>
    );
  }
}

export default AmazonPaymentView;
