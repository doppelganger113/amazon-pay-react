# Amazon pay React

Un-official implementation of Amazon pay in React.

Table of Contents
=================

* [Usage](#usage)
    * [Install](#install)
    * [Getting started](#getting-started)
    * [Documentation](#documentation)
* [Contributing](#contributing)
    * [Development](#development)
    * [Versioning](#versioning)
* [TODO](#todo)


Usage
======
Install
--------
 - yarn
    ```bash
    yarn install amazon-pay-react
    ```
 - npm
    ```bash
    npm install amazon-pay-react
    ```
    
Getting started
----------------

 - **Single page** 
  For using all widgets on a single page importing `AmazonPay` should be enough:
```jsx
import AmazonPay from 'amazon-pay-react';

<AmazonPay
        clientId='your-cliendId'
        sellerId='your-sellerId'
        agreementType={'BillingAgreement'}
        scope='profile payments:widget'
        btnType='PwA'
        btnColor='Gold'
        btnSize='medium'
        onConsentChange={(hasConsent) => ...handle}
        handleBillingAgreementId={(billingAgreementId) => ...handle}
        billingAgreementId={this.state.billingAgreementId}
        useAmazonAddressBook={true}
        // isSandbox={true}
/>
```
  **Additional options** to AmazonPay component:
  
  | Attribute                   | Description                                 | Type     |
  | --------------------------- |:-------------------------------------------:| --------:|
  | isSandbox                   | Sandbox or production env                   | boolean  |
  | onAmazonLoginReady          | Function callback                           | function |
  | onAddressSelect             | Function callback                           | function |
  | onPaymentSelect             | Function callback                           | function |
  | handleAddressBookError      | Function callback                           | function |
  | handleWalletOnPaymentSelect | Function callback, argument orderReference  | function |
  | handleWalletError           | Function callback                           | function |
  | handleConsentError          | Function callback                           | function |
  | handleButtonError:          | Function callback                           | function |


 - **Split across multiple pages**
  When you want to have component per view, you must wrap each widget/component individually with
the following wrapper in order to not try to render without having the script previously loaded.
```jsx
import {AmazonPayButton, amazonBootstrapComponent} from 'amazon-pay-react';

const BootstrappedAmazonPayButton = amazonBootstrapComponent(AmazonPayButton);
```
Note that `BootstrappedAmazonPayButton` version will require additional attributes:

| Attribute                   | Description                                               | Type     |
| --------------------------- |:---------------------------------------------------------:| --------:|
| isSandbox                   | Sandbox or production env                                 | boolean  |
| amazonScriptLoaded          | True if amazon library has loaded via onAmazonLoginReady  | boolean  |
| onAmazonLoginReady          | Function callback                                         | function |

Check this [example implementation](examples/src/index.js) for a quick start.

Documentation
--------------
More information on using the widgets can be found at [pay.amazon.com](https://pay.amazon.com/es/developer/documentation/lpwa/201952050)

Contributing
=============
If you want to contribute to the library feel free to create an issue and/or a PR
with a prefix of **feature/your-feature-name** or **bugfix/your-bug-name** 

Development
-----------

- Running the example locally with _watch_
    ```bash
    yarn dev
    ```
- Testing
    ```bash
    yarn test
    ```

Note that you can swap between single page and React router version at `examples/src/index.js`

If you want to quick test library implementation locally you can use `yarn link`.
Just don't forget to build it before that with `yarn build`.

Versioning
-----------
https://semver.org/

TODO
=====
 - Update documentation
 - Add more tests
 - Add more flexibility
 - Specify goals

