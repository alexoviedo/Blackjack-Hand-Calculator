/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {

  let test1 = []
  let test2 = []

  for (var i = 0; i < hand.length; i++) {
    if (hand[i]=="A") {
      test1.push(11)}
    else if(hand[i]=="J" ||hand[i]=="K" ||hand[i]=="Q") {
      test1.push(10)
    } else {
      test1.push(hand[i])
    }
  }

  for (var i = 0; i < hand.length; i++) {
    if (hand[i]=="A") {
      test2.push(1)}
    else if(hand[i]=="J" ||hand[i]=="K" ||hand[i]=="Q") {
      test2.push(10)
    } else {
      test2.push(hand[i])
    }
  }


  let test1Reduced = test1.map(Number).reduce(function(a,b){return a+b})
  let test2Reduced = test2.map(Number).reduce(function(a,b){return a+b})

  if (test1Reduced < 22) {
    return test1Reduced
  } 
  else {
    return test2Reduced
  }
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
