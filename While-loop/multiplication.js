/***
Generate a multiplication table for number 9
 */
/*programming hero*/

const number=9;
let result=1;
let i=1;

while(i<=10){
  const result = number *i;
  console.log(`${number} x ${i} = ${result}`);
  i++;
}


