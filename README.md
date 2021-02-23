# quickdebug


quickdebug is a debug tool with colondebug($package.json.name)

[![npm version](https://badge.fury.io/js/quickdebug.svg)](http://badge.fury.io/js/quickdebug)

## Install

    $ npm install --save quickdebug

## Usage 

此种情况，colondebug就是debug模块。

```js
const debug = require('quickdebug')()

debug(Object.keys(console))

```

执行结果

```js
$ DEBUG=* node test.js
  get_closest_package_json not exist file = /Users/i5ting/Documents/quickdebug-demo/package.json/get_closest_package_json/node_modules +0ms
  get_closest_package_json exist file = /Users/i5ting/Documents/quickdebug-demo/package.json +1ms
  get_closest_package_json not exist file = /Users/i5ting/Documents/package.json +1ms
  get_closest_package_json not exist file = /Users/i5ting/package.json +0ms
  get_closest_package_json not exist file = /Users/package.json +0ms
  get_closest_package_json not exist file = /package.json +0ms
quickdebug-demo
  quickdebug-demo [
  quickdebug-demo   'log',            'warn',
  quickdebug-demo   'dir',            'time',
  quickdebug-demo   'timeEnd',        'timeLog',
  quickdebug-demo   'trace',          'assert',
  quickdebug-demo   'clear',          'count',
  quickdebug-demo   'countReset',     'group',
  quickdebug-demo   'groupEnd',       'table',
  quickdebug-demo   'debug',          'info',
  quickdebug-demo   'dirxml',         'error',
  quickdebug-demo   'groupCollapsed', 'Console',
  quickdebug-demo   'profile',        'profileEnd',
  quickdebug-demo   'timeStamp',      'context'
  quickdebug-demo ] +0ms
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` i5ting@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).

