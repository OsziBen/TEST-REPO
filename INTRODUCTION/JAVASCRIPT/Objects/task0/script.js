// TASK #1 //
/*
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
*/
// TASK #2 //
/*
function isEmpty(obj){
    for(let key in obj){
        return false;
    }

    return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/
// TASK #3 //
/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
alert(sum);
*/
// TASK #4 //

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == "number"){
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);
  
for(let key in menu){
    console.log(menu[key]);
}