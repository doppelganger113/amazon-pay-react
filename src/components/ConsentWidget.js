/* global OffAmazonPayments */
import React, {PureComponent} from 'react';
import PropTypes              from 'prop-types';

const DEFAULT_STYLE = {
  width:  '400px',
  height: '228px',
};

const AMAZON_CONSENT_WIDGET_DIV_ID = 'consentWidgetDiv';

class ConsentWidget extends PureComponent {

  constructor(props) {
    super(props);

    this.onReady = this.onReady.bind(this);
    this.onConsent = this.onConsent.bind(this);
    this.onError = this.onError.bind(this);
  }

  componentDidMount() {
    const {sellerId, onReady, onConsent, onError, amazonBillingAgreementId, style} = this.props;

    new OffAmazonPayments.Widgets.Consent({
      sellerId,
      // amazonBillingAgreementId obtained from the Amazon Address Book widget.
      amazonBillingAgreementId,
      design: {
        size: ConsentWidget.getStyle(style),
      },
      onReady,
      onConsent,
      onError,
    }).bind(AMAZON_CONSENT_WIDGET_DIV_ID);
  }

  /**
   * @description Called after widget renders.
   * billingAgreementConsentStatus.getConsentStatus();
   * getConsentStatus returns true or false.
   * true – checkbox is selected
   * false – checkbox is unselected - default
   *
   * @param billingAgreementConsentStatus
   */
  onReady(billingAgreementConsentStatus) {
    const {onReady} = this.props;

    onReady && onReady(billingAgreementConsentStatus.getConsentStatus());
  }

  /**
   * @description Called after the consent checkbox is selected/unselected.
   * billingAgreementConsentStatus.getConsentStatus();
   * getConsentStatus returns true or false.
   * true – checkbox is selected
   * false – checkbox is unselected - default
   *
   * @param billingAgreementConsentStatus
   */
  onConsent(billingAgreementConsentStatus) {
    const {onConsent} = this.props;

    onConsent && onConsent(billingAgreementConsentStatus.getConsentStatus());
  }

  /**
   *
   * @param err
   */
  onError(err) {
    const {onError} = this.props;

    onError && onError(err);
  }

  render() {
    const {style} = this.props;

    return <div id={AMAZON_CONSENT_WIDGET_DIV_ID} style={ConsentWidget.getStyle(style)}/>;
  }
}

ConsentWidget.getStyle = (style) => {
  if (typeof style === 'object') return style;

  return DEFAULT_STYLE;
};

ConsentWidget.propTypes = {
  amazonBillingAgreementId: PropTypes.string.isRequired,
  sellerId:                 PropTypes.string.isRequired,
  style:                    PropTypes.object,
  onReady:                  PropTypes.func,
  onConsent:                PropTypes.func,
  onError:                  PropTypes.func,
};

export default ConsentWidget;
