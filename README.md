This repository bundles [content](https://www.npmjs.com/package/content) library to a single file that can be used in the browser. You can find the bundle under `dist/` folder.

Usage:

```js
contentParser.type('application/json; some=property; and="another"');
// { mime: 'application/json' }
contentParser.disposition('form-data; name="file"; filename=file.jpg');
// { name: 'file', filename: 'file.jpg' }
```

[Demo](https://jsbin.com/wiwerawoxu/edit?html,js,console)
