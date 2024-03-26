'use strict';

var fp = require('fastify-plugin');

var index = fp(async function (fastify, opts = {}) {
  if (opts.supportedLocales && opts.supportedLocales instanceof Array) {
    if (opts.locale && typeof opts.locale === 'string' && opts.locale.includes(opts.supportedLocales)) {
      if (opts.messages && typeof opts.messages === 'object') {
        if (Object.keys(opts.messages).every(message => opts.supportedLocales.includes(message))) {
          const i18n = new I18n({
            ...messages
          });
  
          i18n.locale = opts.locale;
          fastify.decorate('i18n', i18n);
        }
        throw new Error("You have pass failed message")
      }
    }
  }
}, {
  name: '@isekaimaouyoki-sama/i18n-js',
  fastify: '4.x'
});

module.exports = index;
