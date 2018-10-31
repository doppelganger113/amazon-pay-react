import {getScriptUrl, toBoolean} from '../../../src/utils/index';

test('getScriptUrl to return proper javascript cdn urls', () => {
  const testData = [
    [
      [true],
      'https://static-na.payments-amazon.com/OffAmazonPayments/us/sandbox/js/Widgets.js',
    ],
    [
      [true, 'jp'],
      'https://static-fe.payments-amazon.com/OffAmazonPayments/jp/sandbox/lpa/js/Widgets.js',
    ],
    [
      [true, 'uk'],
      'https://static-eu.payments-amazon.com/OffAmazonPayments/uk/sandbox/lpa/js/Widgets.js',
    ],
    [
      [true, 'de'],
      'https://static-eu.payments-amazon.com/OffAmazonPayments/de/sandbox/lpa/js/Widgets.js',
    ],
    [
      [false],
      'https://static-na.payments-amazon.com/OffAmazonPayments/us/js/Widgets.js',
    ],
    [
      [false, 'jp'],
      'https://static-fe.payments-amazon.com/OffAmazonPayments/jp/lpa/js/Widgets.js',
    ],
    [
      [false, 'uk'],
      'https://static-eu.payments-amazon.com/OffAmazonPayments/uk/lpa/js/Widgets.js',
    ],
    [
      [false, 'de'],
      'https://static-eu.payments-amazon.com/OffAmazonPayments/de/lpa/js/Widgets.js',
    ],
  ];

  testData.forEach(([args, expected]) =>
    expect(expected).toBe(getScriptUrl(...args)),
  );
});

test('toBoolean that it correctly casts', () => {
  expect(toBoolean('false')).toBe(false);
  expect(toBoolean('')).toBe(false);
  expect(toBoolean()).toBe(false);
  expect(toBoolean(null)).toBe(false);
  expect(toBoolean('true')).toBe(true);
  expect(toBoolean('falseeee')).toBe(true);
  expect(toBoolean(1)).toBe(true);
});
