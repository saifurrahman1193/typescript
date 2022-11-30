type stringOrNumber = string | number;

let calculation : (num1:number, num2:number, action:string) => stringOrNumber;

calculation = (x:number, y:number, c:string) => {
    if (c=='plus') 
    {
        return x+y;    
    } 
    else if (c=='minus') 
    {
        return x-y;    
    }
    return 'Error: Invalid action';    
}

console.log(calculation(10, 5, 'plus'));
console.log(calculation(10, 5, 'minus'));
console.log(calculation(10, 5, ''));
