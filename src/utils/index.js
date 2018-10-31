/**
 * @typedef {string} Region
 *
 * @readonly
 * @enum {Region}
 */
export const REGION = {
  de: 'de',
  uk: 'uk',
  jp: 'jp',
  us: 'us',
};

/**
 *
 * @param {boolean} isSandbox
 * @param {Region} region
 * @return {string}
 */
export const getScriptUrl = (isSandbox, region = REGION.us) => {
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
 * @param {Region} region
 */
export const appendScript = (isSandbox, region = REGION.us) => {
  const script = document.createElement('script');

  script.type = 'text/javascript';
  script.src = getScriptUrl(isSandbox, region);
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
