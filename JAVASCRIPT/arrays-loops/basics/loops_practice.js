// TASK #1 - even numbers between 2 and 10
/*
for(let i = 1; i <= 10; i++){
    if(i % 2 === 1) continue;
    console.log(i);
}
*/

// TASK #2 - rewrite for to while
/*
//for (let i = 0; i < 3; i++) {
    //alert( `number ${i}!` );
//}

let i = 0;
while(i < 3){
    alert( `number ${i}!` );
    i++;
}
*/

// TASK #3 - repeat until correct input
/*
let input;
do{
    input = prompt("Enter a number greater than 100!", 0);    
}while(input <= 100 && input);
*/

// TASK #4 - prime numbers
let N = 10;
prime:
for(let i = 2; i < N; i++){
    for(let j = 2; j <= i/2; j++){
        if(i % j == 0) continue prime;
    }
    console.log(i);
}