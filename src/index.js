'use strict';

/**
 *
 * @param {number} fatherAge
 * @param {number} sonAge
 * @returns {number}
 */

function getYearsToDoubleAge(fatherAge, sonAge) {
    if (fatherAge < 0 || sonAge < 0 || fatherAge - sonAge < 15) {
        return NaN;
    }

    const years = fatherAge - 2 * sonAge;

    return years;
}

const years = getYearsToDoubleAge(61, 20);


