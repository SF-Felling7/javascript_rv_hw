console.log( 'JC' );


//PROBLEM 1

function isEvenOrOdd(num) {
  if(num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }

}

//PROBLEM 2

function makeTitle(str) {
  str = "game";
  return str.toUpperCase(0);
}
console.log("game".toUpperCase());

//PROBLEM 2

function makeTitle(str) {
   this.str = "game";
  return str.toUpperCase(0,3);
}
console.log("game".toUpperCase());
