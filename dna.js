let testString="cGZbRsTAaC"; //Declaring the string and asigning a value
let dnaString="";//Declarinf an empty string to print in console

//Function dnaSearch takes testString and splits ir in an array to compare if there´s a coincidence 
function dnaSearch(string){
    const searchArray=string.split("");//Spliting the original string
    let dnaSequence=[];//Declaring an empty array to return only the coincidences
    for (let i=0; i<searchArray.length;i++){//Loop for comparing
        if(searchArray[i]==="A"|| searchArray[i]==="C"||searchArray[i]==="T" || searchArray[i]==="G"){//Searching for coincidences
            dnaSequence[i]=searchArray[i];//If there's a coincidence it adds the element to the empty array 
        }
    }
    return dnaSequence;//Returning the array of coincidences
}
const DNA=(test)=>{
    let finalString="";
    let dnaArray=dnaSearch(test);//Calling the function dnaSearch and saving the returned array in dnaArray variable
    dnaArray.forEach(element =>finalString+=element);//Filling the empty dnaString with the elements of dnaArray.
    return finalString;
}

dnaString=DNA(testString);
console.log(dnaString);//Printing dnaString

module.exports=DNA;