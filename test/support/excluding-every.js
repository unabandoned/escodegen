'use strict';

// Deep-copies `value` without any property named in `keys`, at every depth.
// Stands in for chai-exclude's `excludingEvery` so the suite can compare ASTs
// with node:assert's deepStrictEqual.
function excludingEvery(value, keys) {
    if (Array.isArray(value)) {
        return value.map(function (item) {
            return excludingEvery(item, keys);
        });
    }
    if (value === null || typeof value !== 'object' || value instanceof RegExp) {
        return value;
    }
    var copy = {};
    Object.keys(value).forEach(function (key) {
        if (keys.indexOf(key) === -1) {
            copy[key] = excludingEvery(value[key], keys);
        }
    });
    return copy;
}

module.exports = excludingEvery;
