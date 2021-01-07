// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"];

function writeCards(names, event) {
   let arr = []
   for (let i=0; i < names.length; i++) {
      arr[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
   }
   return arr
}

function countDown(num) {
   for (let i=num; i>=0; i--) {
      console.log(i)
   }
}
