import React, {Component}                     from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AmazonButtonView                       from './AmazonButtonView';
import AmazonAddressView                      from './AmazonAdressView';
import AmazonPaymentView                      from './AmazonPaymentView';

export const ROUTES = {
  HOME:    '/',
  ADDRESS: '/address',
  PAYMENT: '/payment',
};

const Links = () =>
  <nav>
    <Link to={ROUTES.HOME}>Home</Link>
    <Link to={ROUTES.ADDRESS}>Address</Link>
    <Link to={ROUTES.PAYMENT}>Payment</Link>
  </nav>;

export default class RouterControllerComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      billingAgreementId: '',
      amazonScriptLoaded: false,
    };

    this.handleOnBillingAgreementSelect = this.handleOnBillingAgreementSelect.bind(
      this);
    this.setAmazonScriptLoaded = this.setAmazonScriptLoaded.bind(this);
  }

  handleOnBillingAgreementSelect(billingAgreementId) {
    this.setState({billingAgreementId});
  }

  setAmazonScriptLoaded() {
    this.setState({amazonScriptLoaded: true});
  }

  render() {
    return (
      <Router>
        <div>
          <Links/>
          <Route exact path={ROUTES.HOME}
                 component={(props) =>
                   <AmazonButtonView {...props} {...this.props}
                                     onAmazonReady={this.setAmazonScriptLoaded}
                                     amazonScriptLoaded={this.state.amazonScriptLoaded}
                   />}
          />
          <Route exact path={ROUTES.ADDRESS} component={(props) =>
            <AmazonAddressView {...props} {...this.props}
                               onBillingAgreementSelected={this.handleOnBillingAgreementSelect}
                               billingAgreementId={this.state.billingAgreementId}
            />}
          />
          <Route exact path={ROUTES.PAYMENT} component={(props) =>
            <AmazonPaymentView {...props} {...this.props}
                               billingAgreementId={this.state.billingAgreementId}/>}
          />
        </div>
      </Router>
    );
  }
}
