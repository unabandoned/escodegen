## Escodegen

`@unabandoned/escodegen` is a maintained fork of
[estools/escodegen](https://github.com/estools/escodegen), kept by the
[unabandoned](https://github.com/unabandoned) org so its dependency tree stays
current. The API is unchanged from upstream 2.1.0.

Escodegen is an
[ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
(also popularly known as [JavaScript](http://en.wikipedia.org/wiki/JavaScript))
code generator from [Mozilla's Parser API](https://developer.mozilla.org/en/SpiderMonkey/Parser_API)
AST.

### Install

    npm install @unabandoned/escodegen

To keep existing `require('escodegen')` / `import escodegen from 'escodegen'`
calls working, install it under the original name with an npm alias:

    "escodegen": "npm:@unabandoned/escodegen@^2"

Source map generation (the `sourceMap` option) uses
[source-map](https://github.com/mozilla/source-map), installed as an optional
dependency.

### Usage

A simple example: the program

    escodegen.generate({
        type: 'BinaryExpression',
        operator: '+',
        left: { type: 'Literal', value: 40 },
        right: { type: 'Literal', value: 2 }
    });

produces the string `'40 + 2'`.

See the [API page](https://github.com/estools/escodegen/wiki/API) for
options. To run the tests, execute `npm test` in the root directory.

The `escodegen` / `esgenerate` command-line tools from upstream are not part
of this fork.

### License

#### Escodegen

Copyright (C) 2012 [Yusuke Suzuki](http://github.com/Constellation)
 (twitter: [@Constellation](http://twitter.com/Constellation)) and other contributors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.

  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
