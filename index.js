// function with two arguements
// should return a welcome message including the new persons positions in line
var num = 0

function takeANumber(deline) {
  num++
  deline.push(num)
  return ("Welcome. You are number " + num);
}

let katzDeli = []

console.log(takeANumber(katzDeli))
console.log(takeANumber(katzDeli))
console.log(takeANumber(katzDeli))
console.log(katzDeli)

// nowServing accepts the current line of people 
// and returns the first person in line and then remove that individual from the line. 
// if there is nobody on line, return "There is nobody waiting to be served."

function nowServing(deline) {

  
  if ( 0 === deline.length) {
    return "There is nobody waiting to be served!"
  }
  else {
    return ("Currently serving " + deline.shift() + ".")
  }
}


// build a function "currentLine" accepts current line of people 
// and returns the current line as a string (create a new variable)
// if there is nobody in line, it return " The line is currently empty"



function currentLine(deline) {
  let i = 0
  var line = [];
  while (i < deline.length) {
    line.push(" " + [i+1] + ". " + deline[i])
    i++;
  }
  if ( 0 === deline.length) {
    return "The line is currently empty."
  }
  else {
    return ("The line is currently:" + line);
  }
}



