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

function getMessage(years) {
    if (years > 0) {
        return `Батько буде удвічі старший за сина через ${years} ${years % 10 ? 'рік' : 'років'}`;
    } else if (years < 0) {
        const absYears = Math.abs(years);

        return `Батько був удвічі старший за сина ${absYears} ${absYears % 10 ? 'рік' : 'років'} тому`;
    } else {
        return `Зараз батько удвічі старший за сина`;
    }
}

const years = getYearsToDoubleAge(61, 20);

console.log(getMessage(years));
