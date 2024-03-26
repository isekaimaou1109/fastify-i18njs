# @isekaimaouyoki-sama/fastify-i18njs

This is a small wrapper around [i18n-js](https://www.npmjs.com/package/i18n-js).

## Install
```
npm install --save @isekaimaouyoki-sama/fastify-i18njs
```

## Usage

Easy to use require/import this plugin as below

```js
const path = require('path')
const fastify = require('fastify')()

fastify.register(
  require('@isekaimaouyoki-sama/fastify-i18njs'),
  { 
    locale: 'vi',
    supportedLocales: ['en', 'de', 'vi'],
    messages: {
      de: require(path.join(__dirname, 'locales', 'de.js')),
      en: require(path.join(__dirname, 'locales', 'en.js')),
      vi: require(path.join(__dirname, 'locales', 'vi.js'))
    }
  }
)

fastify.get("/", async function(request, reply) {
  reply.send(fastify.i18n.t('<....>'))
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
})
```