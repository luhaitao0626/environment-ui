'use strict';

const envUi = require('..');
const assert = require('assert').strict;

assert.strictEqual(envUi(), 'Hello from envUi');
console.info("envUi tests passed");
