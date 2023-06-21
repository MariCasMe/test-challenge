
let Result; //Declaring result as the variable used to save the returned value of the function factorial
//Function factorial, returns 1 if the number is equal to zero, returns the value of the factorial of the numer
const factorial=(num)=>num===0?1:num*factorial(num-1);

//Making sure factor is a non negative integer, if it is, console prints the result
const validation=(factor)=>{
   let result;
   if(factor>=0 && factor%1===0){
    result=factorial(factor);
    console.log(`El factorial de ${factor} es ${result}`);
    return result;
   }else{//If factor isn't a non negative integer console prints a message requesting a valid number
      console.log("Ingrese un numero entero no negativo");
      return -1;
   }
} 

Result=validation(5);


module.exports=validation;