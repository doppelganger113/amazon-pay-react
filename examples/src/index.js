import React                     from 'react';
import {render}                  from 'react-dom';
// import ControllerComponent       from './ControllerComponent';
import RouterControllerComponent from './routing/RouterControllerComponent';
import {REGION}                  from '../../src/utils';

const App = () => (
  <RouterControllerComponent
    clientId='your-clientId'
    sellerId='your-sellerId'
    agreementType={'BillingAgreement'}
    scope='profile payments:widget'
    region={REGION.uk} // default to us
    btnType='PwA'
    btnColor='Gold'
    btnSize='medium'
    handleBillingAgreementId={(billingAgreementId) => console.info(
      'BillingAgreementId', billingAgreementId)}
    billingAgreementId={(billingAgreementId) => console.info(
      'BillingAgreementId', billingAgreementId)}
    useAmazonAddressBook={true}
    isSandbox={true}
    onConsentChange={(hasConsent) => console.log('hasConsent', hasConsent)}
    onAddressSelect={(billingAgreement) => console.info(
      'Selected address', billingAgreement)}
    onPaymentSelect={(orderReference) => console.info(
      'Selected payment', orderReference)}
  />
);
render(<App/>, document.getElementById('root'));
