import React, {Component} from 'react';
import AmazonPay          from '../../src/components/AmazonPay';
import {REGION}           from '../../src/utils';

export default class ControllerComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			hasConsent:         false,
			billingAgreementId: '',
		};

		this.handleConsentChange = this.handleConsentChange.bind(this);
		this.handleBillingAgreementId = this.handleBillingAgreementId.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}

	/**
	 *
	 * @param {boolean} hasConsent
	 */
	handleConsentChange(hasConsent) {
		this.setState({hasConsent});
	}

	/**
	 *
	 * @param {string} billingAgreementId
	 */
	handleBillingAgreementId(billingAgreementId) {
		this.setState({billingAgreementId});
	}

	handleOnSubmit() {
		console.log(`Submitting ${this.state.billingAgreementId}`);
	}

	render() {
		return <div>
			<AmazonPay
          clientId='your-clientId'
          sellerId='your-sellerId'
					agreementType={'BillingAgreement'}
					scope='profile payments:widget'
          region={REGION.us}
					btnType='PwA'
					btnColor='Gold'
					btnSize='medium'
					handleBillingAgreementId={this.handleBillingAgreementId}
					billingAgreementId={this.state.billingAgreementId}
					useAmazonAddressBook={true}
					isSandbox={true}
          onConsentChange={this.handleConsentChange}
          onAddressSelect={(billingAgreement) => console.info('Selected address', billingAgreement)}
          onPaymentSelect={(orderReference) => console.info('Selected payment', orderReference)}
			/>
			<button onClick={this.handleOnSubmit}
			        disabled={!this.state.hasConsent}>Submit
			</button>
		</div>;
	}
}
