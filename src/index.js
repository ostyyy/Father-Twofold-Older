'use strict';

/**
 * calculates how many years from now (or how many years ago)
 * the father was or will be twice as old as the son.
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

/**
 * returns correct word form for year.
 *
 * @param {number} num
 * @returns {string}
 */
function getYearWord(num) {
    const last = num % 10;
    const lastTwo = num % 100;

    if (lastTwo >= 11 && lastTwo <= 14) return 'років';

    if (last === 1) return 'рік';

    if (last >= 2 && last <= 4) return 'роки';

    return 'років';
}

/**
 * returns message describing when the father
 * was or will be twice as old as the son.
 *
 * @param {number} years
 * @returns {string}
 */
function getMessage(years) {
    if (Number.isNaN(years)) {
        return 'НЕкоректні дані!';
    }

    if (years > 0) {
        return `Батько буде удвічі старший за сина через ${years} ${getYearWord(years)}`;
    } else if (years < 0) {
        const absYears = Math.abs(years);

        return `Батько був удвічі старший за сина ${absYears} ${getYearWord(absYears)} тому`;
    }

    return `Зараз батько удвічі старший за сина`;
}

const fatherAge = 54;
const sonAge = 10;

console.log(`---> Вік батька: ${fatherAge}\n---> Вік сина: ${sonAge}`);

const years = getYearsToDoubleAge(fatherAge, sonAge);

console.log(getMessage(years));
