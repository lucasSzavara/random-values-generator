'use strict';

const chai = require('chai');
const Any = require('../index');

const expect = chai.expect;

function shouldBeAInteger(constructor) {
    it('should be a integer', (done) => {
        // GIVEN:
        let number = constructor();
        done();
        // THEN:
        expect(Number.isInteger(number)).to.be.true;
    });
}

function shouldBeAPositiveNumber(constructor) {
    it('should be a positive number', (done) => {
        // GIVEN:
        let number = constructor();
        done();
        // THEN:
        expect(number).to.be.at.least(0);
    });
}

function shouldBeANegativeNumber(constructor) {
    it('should be a negative number', (done) => {
        // GIVEN:
        let number = constructor();
        done();
        // THEN:
        expect(number).to.be.at.most(0);
    });
}

function shouldBeANonZeroNumber(constructor) {
    it('should be a non-zero number', (done) => {
        // GIVEN:
        let number = constructor();
        done();
        // THEN:
        expect(number).to.not.be(0);
    });
}

function shouldBeANumber(constructor) {
    it('should be a number', () => {
        let number = constructor();

        expect(number).to.be.a('number');
    });
}

function shouldBeGraterThan(constructor, least) {
    it('should be greater than ' + least.toString(), () => {
        let number = constructor(least);
        expect(number).to.be.greaterThan(least);
    });
}

function shouldBeLessThan(constructor, most) {
    it('should be less than ' + most.toString(), () => {
        let number = constructor(most);
        expect(number).to.be.lessThan(most);
    });
}

function shouldBeAString(string) {
    it('should be a string', () => {
        expect(string).to.be.a('string');
    });
}

function shouldHaveLength(string, length) {
    it('should have length ' + length.toString(), () => {
        expect(string).to.be.length(length);
    });
}

function shouldThrowRangeErrorIfLengthIsLessThanZero(
    stringConstructor,
    length
) {
    it('should throw RangeError if length is less than zero', () => {
        expect(() => stringConstructor(length)).to.throw();
    });
}

function shouldHaveLengthBiggerThanZero(string) {
    it('should have length bigger than zero', () => {
        expect(string).to.have.length.above(0);
    });
}

// Integers tests:

describe('Any integer', function() {
    shouldBeAInteger(Any.integer);
});

describe('Any integer greater than', () => {
    let least = Any.integer();
    let constructor = Any.integerBiggerThan;

    it('should be a integer', () => {
        let integer = constructor(least);
        expect(Number.isInteger(integer)).to.be.true;
    });

    shouldBeGraterThan(constructor, least);
});

describe('Any integer lower than', () => {
    let most = Any.integer();
    let constructor = Any.integerLessThan;

    it('should be a integer', () => {
        let integer = constructor(most);
        expect(Number.isInteger(integer)).to.be.true;
    });

    shouldBeLessThan(constructor, most);
});

describe('Any positive integer', () => {
    let constructor = Any.positiveInteger;

    shouldBeAInteger(constructor);

    shouldBeAPositiveNumber(constructor);
});

describe('Any negative integer', () => {
    let constructor = Any.negativeInteger;

    shouldBeAInteger(constructor);

    shouldBeANegativeNumber(constructor);
});

describe('Any integer non-zero', () => {
    let constructor = Any.nonZeroInteger;

    shouldBeAInteger(constructor);

    shouldBeANonZeroNumber(constructor);
});

describe('Any negative and non-zero integer', () => {
    let constructor = Any.negativeNonZeroInteger;

    shouldBeAInteger(constructor);

    shouldBeANegativeNumber(constructor);

    shouldBeANonZeroNumber(constructor);
});

describe('Any positive and non-zero integer', () => {
    let constructor = Any.positiveNonZeroInteger;

    shouldBeAInteger(constructor);

    shouldBeAPositiveNumber(constructor);

    shouldBeANonZeroNumber(constructor);
});

// Number tests:

describe('Any number', function() {
    shouldBeANumber(Any.number);
});

describe('Any number greater than', () => {
    let least = Any.number();
    let constructor = Any.numberBiggerThan;

    it('should be a number', () => {
        let number = constructor(least);
        expect(number).to.be.a('number');
    });

    shouldBeGraterThan(constructor, least);
});

describe('Any number lower than', () => {
    let most = Any.number();
    let constructor = Any.numberLessThan;

    it('should be a number', () => {
        let number = constructor(most);
        expect(number).to.be.a('number');
    });

    shouldBeLessThan(constructor, most);
});

describe('Any positive number', () => {
    let constructor = Any.positiveNumber;

    shouldBeANumber(constructor);

    shouldBeAPositiveNumber(constructor);
});

describe('Any negative number', () => {
    let constructor = Any.negativeNumber;

    shouldBeANumber(constructor);

    shouldBeANegativeNumber(constructor);
});

describe('Any number non-zero', () => {
    let constructor = Any.nonZeroNumber;

    shouldBeANumber(constructor);

    shouldBeANonZeroNumber(constructor);
});

describe('Any negative and non-zero number', () => {
    let constructor = Any.negativeNonZeroNumber;

    shouldBeANumber(constructor);

    shouldBeANegativeNumber(constructor);

    shouldBeANonZeroNumber(constructor);
});

describe('Any positive and non-zero number', () => {
    let constructor = Any.positiveNonZeroNumber;

    shouldBeANumber(constructor);

    shouldBeAPositiveNumber(constructor);

    shouldBeANonZeroNumber(constructor);
});

// Strings tests:

describe('Any string', () => {
    shouldBeAString(Any.string());
});

describe('Any string with defined length', () => {
    let size = Any.positiveNonZeroInteger();
    let string = Any.string(size);

    shouldBeAString(string);

    shouldHaveLength(string, size);

    shouldThrowRangeErrorIfLengthIsLessThanZero(
        Any.string,
        Any.negativeNonZeroInteger()
    );
});

describe('Any non-empty string', () => {
    let string = Any.nonEmptyString();

    shouldBeAString(string);

    shouldHaveLengthBiggerThanZero(string);
});