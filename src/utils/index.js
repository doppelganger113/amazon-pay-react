/**
 *
 * @param {boolean} isSandbox
 * @param {string} region
 * @return {string}
 */
export const getScriptUrl = (isSandbox, region = 'us') => {
  const sandbox = isSandbox ? 'sandbox/' : '';

  switch (region.toLowerCase()) {
  case 'de':
    return `https://static-eu.payments-amazon.com/OffAmazonPayments/de/${sandbox}lpa/js/Widgets.js`;
  case 'uk':
    return `https://static-eu.payments-amazon.com/OffAmazonPayments/uk/${sandbox}lpa/js/Widgets.js`;
  case 'jp':
    return `https://static-fe.payments-amazon.com/OffAmazonPayments/jp/${sandbox}lpa/js/Widgets.js`;
  default:
    return `https://static-na.payments-amazon.com/OffAmazonPayments/us/${sandbox}js/Widgets.js`;
  }
};

/**
 *
 * @param {boolean} isSandbox
 */
export const appendScript = (isSandbox) => {
  const script = document.createElement('script');

  script.type = 'text/javascript';
  script.src = getScriptUrl(isSandbox);
  script.async = true;

  document.body.appendChild(script);
};

/**
 *
 * @param {any} value
 * @return {boolean}
 */
export const toBoolean = (value) => {
  if (typeof value === 'string') {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
  }

  return !!value;
};