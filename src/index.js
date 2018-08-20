import AmazonPay             from './components/AmazonPay';
import AmazonPayButton       from './components/AmazonPayButton';
import AmazonAddressBook     from './components/AmazonAddressBook';
import WalletWidget          from './components/WalletWidget';
import ConsentWidget         from './components/ConsentWidget';
import {bootstrapWithAmazon} from './hoc';

export default AmazonPay;

export {
  AmazonPayButton,
  bootstrapWithAmazon,
  AmazonAddressBook,
  WalletWidget,
  ConsentWidget,
};
