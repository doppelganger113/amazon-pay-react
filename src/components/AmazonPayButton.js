/* global amazon, OffAmazonPayments */
import React, {PureComponent}     from 'react';
import PropTypes                  from 'prop-types';
import {AmazonBootstrapComponent} from '../hoc';

class AmazonPayButton extends PureComponent {

  constructor(props) {
    super(props);

    this.onAuthorization = this.onAuthorization.bind(this);
    this.onError = this.onError.bind(this);
  }

  onAuthorization() {
    const {onAuthorization} = this.props;
    onAuthorization && onAuthorization();
  }

  /**
   *
   * @param err
   */
  onError(err) {
    const {onError} = this.props;
    onError && onError(err);
  }

  componentDidMount() {
    const {
            sellerId, scope, type, color, size, useAmazonAddressBook,
          } = this.props;

    OffAmazonPayments.Button('AmazonPayButton', sellerId, {
      type,
      color,
      size,
      useAmazonAddressBook,
      authorization: () => {
        const loginOptions = {scope};

        amazon.Login.authorize(loginOptions, this.onAuthorization());
      },
      onError:       this.onError,
    });
  }

  render() {
    return <div id="AmazonPayButton"/>;
  }
}

AmazonPayButton.propTypes = {
  sellerId:             PropTypes.string.isRequired,
  scope:                PropTypes.string.isRequired,
  type:                 PropTypes.string.isRequired,
  color:                PropTypes.string.isRequired,
  size:                 PropTypes.string.isRequired,
  useAmazonAddressBook: PropTypes.bool.isRequired,
  onError:              PropTypes.func,
  onAuthorization:      PropTypes.func,
};

export default AmazonPayButton;
