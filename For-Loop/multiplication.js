/***
Generate a multiplication table for number 9
 */
/*programming hero*/

const number=9;
let result=1;
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
    
  }
