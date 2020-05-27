// Code your solutions in this file
const arr=['Lisa', 'Kaitlin', 'Jan'];
function writeCards(arr, surprise){
  for(let i=0;i<arr.length;i++)
  {
    arr[i]= `Thank you, ${arr[i]}, for the wonderful ${surprise} gift!`;
  }
  return arr;
}
writeCards(arr,"surprise");

function countdown(integer){
while(integer >=0){
 console.log(integer--);
}
}
countdown(10);
function writeCards(names,eventName){
for( let i=0;i<=names.length-1;i++){

  names[i] =  `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
}
return names;
}
writeCards(["Lisa","Kaitlin","Jan"],"surprise");