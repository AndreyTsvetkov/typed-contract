/// <reference path="..\..\TypedContract\Contract.ts" />
/// <reference path="..\..\Typings/http_github.com_borisyankov_DefinitelyTyped_raw_master_jasmine_jasmine.d.ts" />

describe("BooleanValidator", () => {

    it("IsTrue returns the right validator", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        let result: BooleanValidator = Contract.In(localVariable).IsTrue();

        // assert
        expect(result).not.toBeNull();
        expect(result).toEqual(jasmine.any(BooleanValidator));
    });

    it("IsTrue does not raise an error when true", () => {
        // arrange
        let localVariable: boolean = true;

        // act/assert
        Contract.In(localVariable).IsTrue();
    });

    it("IsTrue raises a range error when false", () => {
        // arrange
        let localVariable: boolean = false;

        // act
        var failure = () => {
            Contract.In(localVariable).IsTrue();
        }

        // assert
        expect(failure).toThrowError(<any>RangeError);
    });

    it("IsFalse does not raise an error when false", () => {
        // arrange
        let localVariable: boolean = false;

        // act/assert
        Contract.In(localVariable).IsFalse();
    });

    it("IsFalse raises a range error when true", () => {
        // arrange
        let localVariable: boolean = true;

        // act
        var failure = () => {
            Contract.In(localVariable).IsFalse();
        }

        // assert
        expect(failure).toThrowError(<any>RangeError);
    });
});
