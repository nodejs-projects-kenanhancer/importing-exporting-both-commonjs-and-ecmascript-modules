# importing-exporting-both-commonjs-and-ecmascript-modules

I have tested different versions of ES modules(ESM) and CommonJS modules(CJS) in the following branches separately.

Branch list |
----------------------------------------- |
export-and-import-esm |
export-and-import-esm-with-js-extension |
import-esm-and-cjs-from-esm |
import-esm-from-cjs |

There are two types of module system in Node.js as below.
- CommonJS (CJS)
- ECMAScript Module (ESM)

CommonJS module(CJS) system is default module system in Node.js

ECMAScript Module(ESM) system is support from **Node.js v8.5.0**

The **--experimental-modules** flag can be used to enable features for loading ESM modules. But, no need to use after Node.js v12.x, it is active by default.

## Enabling ECMAScript modules (ESM)

When the nearest parent **package.json** file contains a top-level field "type" with a value of "commonjs" then follow the following file extension paths.

**.mjs**, **.js** extension is evaluated as ECMAScript modules (ESM)
**.cjs** extensions are evaluated as CommonJS modules (CJS)

## default module system (CommonJS modules)
if you don't specifiy "type" in packace.json, default value of "type" is "commonjs" so follow the below paths.

**`package.json`**
```json
{
  "type": "commonjs"
}
```

**.cjs**, **.js** extensions are evaluated as CommonJS modules (CJS)
**.mjs** extension is evaluated as ECMAScript modules (ESM)

**`package.json`**
```json
{
  "type": "module"
}
```

**.mjs**, **.js** extension is evaluated as ECMAScript modules (ESM)
**.cjs** extensions are evaluated as CommonJS modules (CJS)

```shell script
node --experimental-modules index.js
```

