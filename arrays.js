"use strict";


//const items1 = ["apple", "berry", "cherry"];

// 1. printIndices
function printIndices(items) {

    for (let i=0; i< items.length; i+=1) {
    console.log(items[i], i);
  }
}

//printIndices(items1)


//const items2 = ["apple", "berry", "cherry","daisy", "elephant", "frank"];

// 2. everyOtherItem
function everyOtherItem(items) {
  
    const result = [];
    
    for (let i=0; i < items.length; i +=2) {

        result.push(items[i]);
    
    }
    console.log(result);

      
}

//everyOtherItem(items2)

//const items3 = [1,2,4,3,5,6,7];

// 3. smallestNItems
function smallestNItems(items, n) {

    let smallest_items_list = [];

    items.sort((a,b) =>a-b);
    smallest_items_list = items.slice(0,n);
    smallest_items_list.reverse();
    console.log(smallest_items_list);

}

//smallestNItems(items3, 3)
