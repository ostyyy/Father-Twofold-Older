'use strict';

/**
 *
 * @param {number} fatherAge
 * @param {number} sonAge
 * @returns {number}
 */

function getYearsToDoubleAge(fatherAge, sonAge) {
    if (
        fatherAge < 0 || 
        sonAge < 0 || 
        fatherAge - sonAge < 15
    ) {
        return NaN;
    }

    const years = fatherAge - 2 * sonAge;

    return years;
}

function getYearWord (num) {
    const last = num % 10;
    const lastTwo = num % 100;

    if(lastTwo >= 11 && lastTwo <= 14) { return 'років'; }

    if(last === 1) { return 'рік'; }

    if(last >= 2 && last <= 4) { return 'роки'; }

    return 'років';
}

function getMessage(years) {

    if (!years){
        return 'НЕкоректні дані!'
    }

    if (years > 0) {
        return `Батько буде удвічі старший за сина через ${years} ${getYearWord(years)}`;
    } else if (years < 0) {
        const absYears = Math.abs(years);

        return `Батько був удвічі старший за сина ${absYears} ${getYearWord(absYears)} тому`;
    } else {
        return `Зараз батько удвічі старший за сина`;
    }
}



const years = getYearsToDoubleAge(54, 10);

console.log(getMessage(years));
