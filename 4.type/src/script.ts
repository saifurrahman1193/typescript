let person;

person = 34; 
console.log(person);

person = "saifur"; // can change type
console.log(person);


const multiply = (a:number, b:number)=>{
    return a*b;
}
console.log(multiply(3, 4));


let arr = [0,'']  // only can add numbers, string 
arr.push(1)
// arr.push({"a": 1}) // can't add object
// arr.push(true) // can't add boolean
console.log(arr);

let obj = {
    name: 'saifur',
    profession: 'software development',
}

// obj.country = 'bangladesh'; // Property 'country' does not exist on type '{ name: string; profession: string; }'