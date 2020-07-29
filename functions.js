"use strict";


// 1. isHometown

function isHometown(town) {

    return town === "San Francisco"
}

const town1 = "San Francisco"

console.log(isHometown(town1))


// 2. getFullName

function getFullName(firstName, lastName) {

    return firstName + " " + lastName
}

const firstName1 = "Lani"
const lastName1 = "Ludwick"

getFullName(firstName1, lastName1)

// 3. calculateTotal

function calculateTotal(basePrice, state, tax=0.05){

    /*Return total price of item incl. st taxes and fees.

    Arguments:
        basePrice (num: Base price of an item
        state (str): Two-letter abbreviation of a U.S. state
        tax (num): Tax rate. Defaults to 0.05

    Returns:
        num: The total price of an item
    
        */

    let subtotal = basePrice * (1 + tax);
    let fee = 0;

    if (state === 'CA'){
        fee = 0.03 * subtotal;
    }
    else if (state === 'PA') {
        fee = 2;

    }
    else if (state === 'MA') {
        if (basePrice <= 100) {
            fee = 1;
        }
    }

    else {
        fee = 3;
    }

    return subtotal + fee
}


const basePrice1 = 100
const state1 = 'CA' 
console.log(calculateTotal(basePrice1, state1))
