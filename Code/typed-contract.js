var BaseValidator = (function () {
    function BaseValidator(variableValue, variableName) {
        this._variableValue = variableValue;
        if (variableName && variableName.length > 0) {
            this._variableName = variableName;
        }
        else {
            this._variableName = "The variable";
        }
    }
    BaseValidator.prototype.Value = function () {
        return this._variableValue;
    };
    return BaseValidator;
})();
/// <reference path="BaseValidator.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StringValidator = (function (_super) {
    __extends(StringValidator, _super);
    function StringValidator(variableValue, variableName) {
        _super.call(this, variableValue, variableName);
    }
    StringValidator.prototype.IsNotNull = function () {
        return this;
    };
    return StringValidator;
})(BaseValidator);
/// <reference path="BaseValidator.ts" />
var BooleanValidator = (function (_super) {
    __extends(BooleanValidator, _super);
    function BooleanValidator(variableValue, variableName) {
        _super.call(this, variableValue, variableName);
    }
    BooleanValidator.prototype.IsTrue = function () {
        if (!this._variableValue) {
            throw new RangeError(this._variableName + " should be true");
        }
        else {
            return this;
        }
    };
    BooleanValidator.prototype.IsFalse = function () {
        if (this._variableValue) {
            throw new RangeError(this._variableName + " should be false");
        }
        else {
            return this;
        }
    };
    return BooleanValidator;
})(BaseValidator);
/// <reference path="BaseValidator.ts" />
var NumberValidator = (function (_super) {
    __extends(NumberValidator, _super);
    function NumberValidator(variableValue, variableName) {
        _super.call(this, variableValue, variableName);
    }
    NumberValidator.prototype.IsGreaterThan = function (compareTo) {
        return this;
    };
    return NumberValidator;
})(BaseValidator);
/// <reference path="BaseValidator.ts" />
var ArrayValidator = (function (_super) {
    __extends(ArrayValidator, _super);
    function ArrayValidator(variableValue, variableName) {
        _super.call(this, variableValue, variableName);
    }
    ArrayValidator.prototype.IsEmpty = function () {
        return this;
    };
    return ArrayValidator;
})(BaseValidator);
/// <reference path="BaseValidator.ts" />
var ObjectValidator = (function (_super) {
    __extends(ObjectValidator, _super);
    function ObjectValidator(variableValue, variableName) {
        _super.call(this, variableValue, variableName);
    }
    ObjectValidator.prototype.IsNotNull = function () {
        return this;
    };
    ObjectValidator.prototype.IsExpectedType = function () {
        return this;
    };
    return ObjectValidator;
})(BaseValidator);
/// <reference path="TypeValidators\StringValidator.ts" />
/// <reference path="TypeValidators\BooleanValidator.ts" />
/// <reference path="TypeValidators\NumberValidator.ts" />
/// <reference path="TypeValidators\ArrayValidator.ts" />
/// <reference path="TypeValidators\ObjectValidator.ts" />
var Contract;
(function (Contract) {
    "use strict";
    function In(precondition, name) {
        if (name === void 0) { name = undefined; }
        if (typeof precondition === "string") {
            return new StringValidator(precondition, name);
        }
        else if (typeof precondition === "boolean") {
            return new BooleanValidator(precondition, name);
        }
        else if (typeof precondition === "number") {
            return new NumberValidator(precondition, name);
        }
        else if (precondition instanceof Array) {
            return new ArrayValidator(precondition, name);
        }
        else {
            return new ObjectValidator(precondition, name);
        }
        return undefined;
    }
    Contract.In = In;
})(Contract || (Contract = {}));
//# sourceMappingURL=typed-contract.js.map