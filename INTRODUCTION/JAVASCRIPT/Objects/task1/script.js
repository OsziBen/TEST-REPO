function isEven(number){
    return number % 2 === 0;
}

function tripleNumber(number){
    return number * 3;
}

function getSum(sum, number){
    return sum += number;
}

function sumOfTripledEvens(array) {
    /*
    let sum = 0;
    const evenArray = array.filter(isEven);
    const tripleEvenArray = evenArray.map(tripleNumber);
    return tripleEvenArray.reduce( getSum , 0);
    */
   return arr.filter((num) => num % 2 === 0).map((num) => num * 3).reduce((acc, curr) => acc + curr);

  }

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(sumOfTripledEvens(arr));