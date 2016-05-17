import * as basevalidator from "./BaseValidator";

export class NumberValidator extends basevalidator.BaseValidator<number> {

        constructor(variableValue: number, variableName: string) {
            super(variableValue, variableName);
        }

        /**
         *
         * IsNotNull checks if the type number variable is not null
         * @throws a ReferenceError if the variable is null
         * @returns {NumberValidator}
         */
        public IsNotNull(): NumberValidator {
            if (this._variableValue === null) {
                throw new ReferenceError(`${this._variableName} should not be null`);
            } else {
                return this;
            }
        }

        /**
         *
         * IsNull checks if the string variable is null
         * @throws a ReferenceError if the variable is not null
         * @returns {NumberValidator}
         */
        public IsNull(): NumberValidator {
            if (this._variableValue !== null) {
                throw new ReferenceError(`${this._variableName} should be null`);
            } else {
                return this;
            }
        }


        /**
         * IsDefined checks if the number variable is defined
         * @throws ReferenceError if the number variable jis not defined
         * @returns {NumberValidator}
         */
        public IsDefined(): NumberValidator {
            if (typeof this._variableValue === "undefined") {
                throw new ReferenceError(`${this._variableName} should be defined`);
            } else {
                return this;
            }
        }

        /**
         * IsUndefined checks if the number variable is undefined
         * @throws a ReferenceError if the number variable is undefined
         * @returns {NumberValidator}
         */
        public IsUndefined(): NumberValidator {
            if (typeof this._variableValue !== "undefined") {
                throw new ReferenceError(`${this._variableName} should not be defined`);
            } else {
                return this;
            }
        }

        /**
         * IsNullOrUndefined checks if the number variable is not null or undefined
         * @throws ReferenceError if the number variable is null or undefined
         * @returns {NumberValidator}
         */
        public IsNullOrUndefined(): NumberValidator {
            if (this._variableValue === null || typeof this._variableValue === undefined) {
                throw new ReferenceError(`${this._variableName} should not be null or undefined`);
            } else {
                return this;
            }
        }

        /**
         *
         * IsEqualTo checks if the number variable is equal to the parameter passed into the function as an argument
         * @throws RangeError if the number variable is not equal to the parameter passed into the function
         * @param compareTo
         * @returns {NumberValidator}
         */
        public IsEqualTo(compareTo: number): NumberValidator {
            if (this._variableValue !== compareTo) {
                throw new RangeError(`${this._variableName} should be equal to the number variable ${compareTo}`);
            } else {
                return this;
            }

        }

        /**
         *
         * IsNotEqualTo checks if the number variable is not equal to the parameter passed into the function as an argument
         * @throws RangeError if the number variable is equal to the parameter passed into the function
         * @param compareTo
         * @returns {NumberValidator}
         */
        public IsNotEqualTo(compareTo: number): NumberValidator {
            if (this._variableValue === compareTo) {
                throw new RangeError(`${this._variableName} should not be equal to the number variable ${compareTo}`);
            } else {
                return this;
            }
        }

        /**
         *
         * IsGreaterThan checks if the number variable is not greater than the parameter passed into the function as an argument
         * @throws RangeError if the number variable is less or equal to the parameter passed into the function
         * @param compareTo
         * @returns {NumberValidator}
         */
        public IsGreaterThan(compareTo: number): NumberValidator {
            if (this._variableValue < compareTo) {
                throw new RangeError(`${this._variableName} should be greater than ${compareTo} but is ${this._variableValue}`);
            } else {
                return this;
            }
        }

        /**
         *
         * IsNotGreaterThan checks if the number variable is not greater to the parameter passed into the function as an argument
         * @throws RangeError if the number variable is equal to the parameter passed into the function
         * @param compareTo
         * @returns {NumberValidator}
         */
        public IsNotGreaterThan(compareTo: number): NumberValidator {
            if (this._variableValue > compareTo) {
                throw new RangeError(`${this._variableName} should not be greater than ${compareTo} but is ${this._variableValue}`);
            } else {
                return this;
            }
        }

        /**
         *
         * IsGreaterOrEqualThan checks if the number variable is greater or equal than the parameter passed into the function as an argument
         * @throws RangeError if the number variable is equal to the parameter passed into the function
         * @param compareTo
         * @returns {NumberValidator}
         */
        public IsGreaterOrEqualThan(compareTo: number): NumberValidator {

            if (this._variableValue <  compareTo) {
                throw new RangeError(`${this._variableName} should be greater than ${compareTo} but is ${this._variableValue}`);
            } else {
                return this;
            }
        }
        /**
         *
         * IsNotGreaterOrEqualThan checks if the number variable is not greater or equal than the
         * parameter passed into the function as an argument
         * @throws RangeError if the number variable is equal or greater than parameter passed into the function
         * @param compareTo
         * @returns {NumberValidator}
         */
        public IsNotGreaterOrEqualThan(compareTo: number): NumberValidator {
            if (this._variableValue > compareTo) {
                throw new RangeError(`${this._variableName} should not be greater or equal to ${compareTo} but is ${this._variableValue}`);
            } else {
                return this;
            }
        }
        /**
         *
         * IsLessThan checks if the number variable is less than the parameter passed into the function as an argument
         * @throws RangeError if the number variable is greater to the parameter passed into the function
         * @param compareTo
         * @returns {NumberValidator}
         */
        public IsLessThan(compareTo: number): NumberValidator {
            if (this._variableValue >= compareTo) {
                throw new RangeError(`${this._variableName} should be less than ${compareTo} but is ${this._variableValue}`);
            } else {
                return this;
            }
        }
        /**
         *
         * IsNotLessThan checks if the number variable is not less than the parameter passed into the function as an argument
         * @throws RangeError if the number variable is greater to the parameter passed into the function
         * @param compareTo
         * @returns {NumberValidator}
         */
        public IsNotLessThan(compareTo: number): NumberValidator {
            if (this._variableValue <= compareTo) {
                throw new RangeError(`${this._variableName} should not be less than ${compareTo} but is ${this._variableValue}`);
            } else {
                return this;
            }
        }

    /**
     *
     * IsLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */

        public IsLessOrEqualThan(compareTo: number): NumberValidator {
            if (this._variableValue > compareTo) {
                throw new ReferenceError(`${this._variableName} should be less or equal than ${compareTo} but is ${this._variableName}`);
            } else {
                return this;
            }
        }
    /**
     *
     * IsNotLessOrEqualThan checks if the number variable is less or equal than the parameter passed into the function as an argument
     * @throws RangeError if the number variable is greater or equal than the parameter passed into the function
     * @param compareTo
     * @returns {NumberValidator}
     */

    public IsNotLessOrEqualThan(compareTo: number): NumberValidator {
        if (this._variableValue <= compareTo) {
            throw new RangeError(`${this._variableName} should not be less or equal
                 than ${compareTo} but is ${this._variableValue}`);
        } else {
            return this;
        }
    }

    public IsBetween(startRange: number, endRange: number): NumberValidator {
        if (this._variableValue > startRange && this._variableValue < endRange) {
            return this;
        } else {
            throw new RangeError(`${this._variableName} should be between
            ${startRange} and ${endRange}, but the value of
            ${this._variableValue} is not in that range`);
        }

    }

    public IsNotBetween(startRange: number, endRange: number): NumberValidator {
        if (this._variableValue > startRange && this._variableValue < endRange) {
            throw new RangeError(`${this._variableName} should not be between
            ${startRange} and ${endRange}, but the value of ${this._variableValue} is in that range`);
        } else {
            return this;
        }
    }
}