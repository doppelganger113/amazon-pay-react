import React, {Component}         from 'react';
import {withRouter}               from 'react-router-dom';
import {ROUTES}                   from './RouterControllerComponent';
import AmazonPayButton
                                  from '../../../src/components/AmazonPayButton';
import {bootstrapWithAmazon} from '../../../src/hoc';

const BootstrappedButton = bootstrapWithAmazon(AmazonPayButton);

class AmazonButtonView extends Component {

  constructor(props) {
    super(props);

    this.handleOnAuthorization = this.handleOnAuthorization.bind(this);
  }

  handleOnAuthorization() {
    const {history} = this.props;
    console.info('Authorized');
    history.push(ROUTES.ADDRESS);
  }

  render() {
    console.log('Rendering route');
    return (
      <div>
        <h2>Amazon pay</h2>

        <BootstrappedButton
          {...this.props}
          type={this.props.btnType}
          size={this.props.btnSize}
          color={this.props.btnColor}
          onAuthorization={this.handleOnAuthorization}
        />
      </div>
    );
  }
}

export default withRouter(AmazonButtonView);
