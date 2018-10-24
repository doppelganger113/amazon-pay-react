import React, {Component} from 'react';
import {appendScript}     from './utils/index';
import PropTypes          from 'prop-types';

export const bootstrapWithAmazon = (WrappedComponent) => {
  class _BootstrappedAmazonComponent extends Component {

    componentDidMount() {
      const {isSandbox, region = 'us', onAmazonReady, clientId} = this.props;

      window.onAmazonLoginReady = () => {
        window.amazon.Login.setClientId(clientId);
        onAmazonReady && onAmazonReady();
      };

      if (window.amazon) {
        return;
      }

      appendScript(isSandbox, region);
    }

    render() {
      const {amazonScriptLoaded} = this.props;
      if (!amazonScriptLoaded) return <React.Fragment/>;

      return <WrappedComponent {...this.props}/>;
    }
  }

  _BootstrappedAmazonComponent.propTypes = {
    clientId:           PropTypes.string.isRequired,
    onAmazonReady:      PropTypes.func,
    amazonScriptLoaded: PropTypes.bool,
  };

  return _BootstrappedAmazonComponent;
};
