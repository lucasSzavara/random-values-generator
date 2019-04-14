module.exports = class Any {
    static number() {
        let random = Math.random();
        let number = random * 100 * Math.random() * (Math.random() * 10);
        if (Math.floor(random * 10) % 2 == 0) {
            number *= -1;
        }
        return Math.E * number;
    }

    static numberGreaterThan(least) {
        let number = Any.number();
        while (number <= least) {
            number += Any.positiveNonZeroNumber();
        }
        return number;
    }

    static numberLessThan(least) {
        let number = Any.number();
        while (number >= least) {
            number -= Any.positiveNonZeroNumber();
        }
        return number;
    }

    static numberBetween(givenLeast, givenMost) {
        let number = Any.number();
        let least = Math.min(givenLeast, givenMost);
        let most = Math.max(givenLeast, givenMost);
        if (least === most) {
            return least;
        }
        while (number <= least || number >= most) {
            while (number <= least) {
                number += Any.positiveNumber();
            }
            while (number >= most) {
                number -= Any.positiveNumber();
            }
        }
        return number;
    }

    static integer() {
        let number = Math.floor(Any.number());
        return Math.floor(Math.E * number);
    }

    static integerGreaterThan(least) {
        let integer = Any.integer();
        while (integer <= least) {
            integer += Any.positiveNonZeroInteger();
        }
        return integer;
    }

    static integerLessThan(least) {
        let integer = Any.integer();
        while (integer >= least) {
            integer -= Any.positiveNonZeroInteger();
        }
        return integer;
    }

    static integerBetween(least, most) {
        return Math.floor(Any.numberBetween(least + 1, most));
    }

    static positiveNumber() {
        let random = Math.random();
        let number = random * 100 * Math.random() * (Math.random() * 10);
        return Math.E * number;
    }

    static positiveInteger() {
        let number = Any.positiveNumber();
        return Math.floor(Math.E * number);
    }

    static negativeNumber() {
        let random = Math.random();
        let number = random * 100 * Math.random() * (Math.random() * 10);
        return -1 * Math.E * number;
    }

    static negativeInteger() {
        let number = Any.positiveNumber();
        return -1 * Math.floor(Math.E * number);
    }

    static nonZeroNumber() {
        let number = Any.number();
        while (number === 0) {
            number = Any.number();
        }
        return Math.floor(Math.E * number);
    }

    static nonZeroInteger() {
        let number = Any.nonZeroNumber();
        return Math.floor(Math.E * number);
    }

    static negativeNonZeroNumber() {
        let number = Any.negativeNumber();
        while (number === 0) {
            number = Any.negativeNumber();
        }
        return Math.floor(Math.E * number);
    }

    static negativeNonZeroInteger() {
        let number = Any.negativeNonZeroNumber();
        return Math.floor(Math.E * number);
    }

    static positiveNonZeroNumber() {
        let number = Any.positiveNumber();
        while (number === 0) {
            number = Any.positiveNumber();
        }
        return Math.floor(Math.E * number);
    }

    static positiveNonZeroInteger() {
        let number = Any.positiveNonZeroNumber();
        return Math.floor(Math.E * number) + 1;
    }

    /*
        @param number length: optional. A non-negative number. The desired length of the string. If the length is a float number, it is rounded
        @returns a string with the selected length. If the length is not defined, it is calculated with Any.positiveInteger()
    */
    static string(length) {
        if (length !== 0) {
            length = Math.round(length) || Any.positiveInteger();
        } else {
            length = Math.round(length);
        }
        if (length < 0) {
            throw new RangeError("String length can't be negative");
        }
        var text = '';
        var possible =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < length; i++) {
            text += possible.charAt(
                Math.floor(Math.random() * possible.length)
            );
        }
        return text;
    }

    static nonEmptyString() {
        return Any.string(Any.positiveNonZeroInteger());
    }
};
