"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var faker = require('faker');
module.exports.generator = function (req, res) {
    var body = req.body;
    var _a = body.data, data = _a === void 0 ? {} : _a, _b = body.count, count = _b === void 0 ? 1 : _b;
    var result = [];
    var _loop_1 = function () {
        var keys = Object.keys(data);
        var tempValue = {};
        if (keys.length !== 0) {
            keys.map(function (key) {
                var _a, _b;
                var value = data[key];
                switch (value) {
                    case 'string': {
                        tempValue = __assign({}, tempValue, (_a = {}, _a[key] = handleString(value), _a));
                        break;
                    }
                    case 'number': {
                        tempValue = __assign({}, tempValue, (_b = {}, _b[key] = handleNumber(value), _b));
                        break;
                    }
                    default:
                        break;
                }
            });
        }
        result.push(tempValue);
        count--;
    };
    while (count !== 0) {
        _loop_1();
    }
    res.json(result);
};
function handleString(string) {
    if (isEmail(string))
        return faker.internet.email();
    if (!isEmail(string))
        return faker.name.findName();
    return string;
}
function isEmail(string) {
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailPattern.test(string)) {
        return true;
    }
    return false;
}
function handleNumber(number) {
    var length = number.toString().length;
    if (isInteger) {
        return faker.random.number(length);
    }
    return faker.random.float(length);
}
function isInteger(number) {
    return number % 1 === 0;
}
