// Code your solutions in this file
const arr=["Ada", "Brendan", "Ali"];
const birthday=["for the wonderful birthday gift!"];
function writeCards(arr, birthday){
  for(let i=0;i<arr.length;i++)
  {
    console.log("Thank you, arr[i], birthday[i]");
  }
  return(arr,birthday);
}
writeCards(arr,birthday);

let countdown=0;
while(countdown<=10){
 console.log(countdown--);
}
