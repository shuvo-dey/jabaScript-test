/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

let sum=0;
let i=91;
while(i<=129){
   if(i%2===1){
       sum=sum+i;
    } 
    i++;
}
console.log("sum of odd number: ", sum);

i=51;
sum=0;
while(i<=85){
   if(i%2===0){
       sum=sum+i;
    } 
    i++;
}
console.log("sum of even number: ", sum);
