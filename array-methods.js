// {bankBalances destructuring assignment so dont have to use dataset. all the time }
let {bankBalances} = require('./dataset.json');
/*
  create an array with accounts from bankBalances that are
  greater than 100000.00
  assign the resulting array to `hundredThousandairs`
*/
let accounts = bankBalances.filter((current) => {
  return current.amount > 100000;
});

let hundredThousandairs = accounts;



/*
  set a new key for each object in bankBalances named `rounded`
  the value of this key will be the `amount` rounded to the nearest dollar
  example
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting array to `roundedDollar`
*/
let rounded = bankBalances.map((current) => {
  return {
    amount: current.amount,
    state: current.state,
    rounded: Math.round(current.amount)  }
});

let roundedDollar = rounded;

/*
  set a the `amount` value for each object in bankBalances
  to the value of `amount` rounded to the nearest 10 cents
  example
    {
      "amount": 134758.4,
      "state": "HI"
    }
  assign the resulting array to `roundedDime`
*/
let swapAmount = bankBalances.map((current) => {
  return {
    amount: Math.round(current.amount*10)/10,
    state: current.state
  }
});

let roundedDime = swapAmount;

//set sumOfBankBalances to the sum of all amounts in bankBalances
let totalSum = bankBalances.reduce((prev, curr) => {
  return Math.round(prev*100)/100 + parseFloat(curr.amount);
},0);

let sumOfBankBalances = totalSum;


/*
  set sumOfInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  in each of the following states
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */
let sumOfInterests = bankBalances.filter(function(bank){
  switch(bank.state){
    case 'WI':
    case 'IL':
    case 'WY':
    case 'OH':
    case 'GA':
    case 'DE':
      return true;
    default:
      return false;
  }
})
.reduce(function(prev, bank){
  var bankAmountWithInterest = (18.9 / 100) * parseFloat(bank.amount);
  var fixBankAmount = Math.round(bankAmountWithInterest * 100) / 100;
  var fixPrev = parseFloat(parseFloat(prev).toFixed(2));

  return fixPrev + fixBankAmount;
}, 0);

console.log('sumOfInterests: ', sumOfInterests);



/*
  set sumOfHighInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  where the amount of the sum of interests in that state is
    greater than 50,000
  in every state except
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */
let tmp = bankBalances.filter((current) => {
   return current.state !== "WI"
      && current.state !== "IL"
      && current.state !== "WY"
      && current.state !== "OH"
      && current.state !== "GA"
      && current.state !== "DE"
});
let sumOfHighInterests = null;

/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table
    where the key is the two letter state abbreviation
    and the value is the sum of all amounts from that state
      the value must be rounded to the nearest cent
 */
var stateSums = null;

/*
  set lowerSumStates to an array containing
  only the two letter state abbreviation of each state
  where the sum of amounts in the state is
    less than 1,000,000
 */
var lowerSumStates = null;

/*
  set higherStateSums to be the sum of
    all amounts of every state
    where the sum of amounts in the state is
      greater than 1,000,000
 */
var higherStateSums = null;

/*
  set areStatesInHigherStateSum to be true if
    all of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */
var areStatesInHigherStateSum = null;

/*
  Stretch Goal && Final Boss

  set anyStatesInHigherStateSum to be true if
    any of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */
var anyStatesInHigherStateSum = null;


module.exports = {
  hundredThousandairs : hundredThousandairs,
  roundedDollar : roundedDollar,
  roundedDime : roundedDime,
  sumOfBankBalances : sumOfBankBalances,
  sumOfInterests : sumOfInterests,
  sumOfHighInterests : sumOfHighInterests,
  stateSums : stateSums,
  lowerSumStates : lowerSumStates,
  higherStateSums : higherStateSums,
  areStatesInHigherStateSum : areStatesInHigherStateSum,
  anyStatesInHigherStateSum : anyStatesInHigherStateSum
};
