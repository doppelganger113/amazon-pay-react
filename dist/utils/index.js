'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var getScriptUrl=exports.getScriptUrl=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'us',c=a?'sandbox/':'';switch(b.toLowerCase()){case'de':return'https://static-eu.payments-amazon.com/OffAmazonPayments/de/'+c+'lpa/js/Widgets.js';case'uk':return'https://static-eu.payments-amazon.com/OffAmazonPayments/uk/'+c+'lpa/js/Widgets.js';case'jp':return'https://static-fe.payments-amazon.com/OffAmazonPayments/jp/'+c+'lpa/js/Widgets.js';default:return'https://static-na.payments-amazon.com/OffAmazonPayments/us/'+c+'js/Widgets.js';}},appendScript=exports.appendScript=function(a,b){var c=document.createElement('script');c.type='text/javascript',c.src=getScriptUrl(a,b),c.async=!0,document.body.appendChild(c)},toBoolean=exports.toBoolean=function(a){if('string'==typeof a){if('true'===a)return!0;if('false'===a)return!1}return!!a};