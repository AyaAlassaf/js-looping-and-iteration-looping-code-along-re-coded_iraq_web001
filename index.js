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

let countDown =10;
while(countDown >=0){
 console.log(countDown--);
}


