// num = 246
// console.log(num);

let num = 246 // can be reasigned
console.log(num);

var num2 = 123
console.log(num2);

const num3 = 234
console.log(num3); //constant value cannot be reasigned

//BLOCK Scope

// let and const blocked scope 

{
    var x = 2
    //console.log(x);
}
console.log(x)

var y = 10
var y = "shiva"
console.log(y);

// let z = 20
// let z = "ayushi"
// console.log(z)

n = 346

if (n%2 ===0){
    console.log('even');
    global = 'this should be global scope'
    let nature = "good"
    console.log(nature);
}
else{
    console.log('odd');
}
console.log(global);

{
    const t = 600
    console.log(t)

}