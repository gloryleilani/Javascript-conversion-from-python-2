"use strict";


// 1. countWords
function countWords(phrase) {
/*Takes in a string, returna a dictionary*/

  const resultingDict = {};

  //Creates a list containing words in the phrase//

  for (const word of phrase.split(" ")) {
    
    if (resultingDict[word]) {
        resultingDict[word] += 1;
    }
    else {
        resultingDict[word] = 1;
    }
  }

  return resultingDict;
};

phrase 1 = "a horse is a horse a horse of course"
console.log(countWords(phrase1))


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  /* Return the list of melons that cost `price`.

    Arguments:
        price (num)

    Returns:
        list: List of melons that cost `price`
        None: If there are no melons that cost `price`
    */

    const melonPrices = {
        2.50: ['Cantaloupe', 'Honeydew'],
        2.95: ['Watermelon'],
        3.25: ['Musk', 'Crenshaw'],
        14.25: ['Christmas']
    }

    if (!melon_prices[price]) {
        return;
    }

    return melonPrices[price].sort();      
    
    }

};
