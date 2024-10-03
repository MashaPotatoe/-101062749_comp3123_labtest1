// Question 1: ES6 Feature
// return promise that is resolved or rejected 
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

// resolve or reject promise 
//filter non string and lower case the words

 //console.log(mixedArray[0].toLowerCase())
 //console.log(mixedArray[5].toLowerCase())
 const lowerCaseA = mixedArray.filter((word)=> word.toLowerCase);
 console.log(lowerCaseA)
newMArray = [...lowerCaseA].map(m => m.toLowerCase());
console.log(newMArray)


function lowerCaseWords(newMArray){
var p = new Promise((resolve, reject) => {
    //if the words are lowercase it will resolve
    //if not it will reject
    if (newMArray[0] == 'pizza' && newMArray[1] == 'wings'){
        const res = {
            status:true,
            message: 'Yay Success our pizza and wings are lowercase!'
        }
    resolve(res)
    } else{
        const fail={
            status: false,
            message: 'No its not Right!'
        }
        reject(fail);
    }
})
return p;
}

lowerCaseWords(newMArray).then((result) =>{
    console.log(result);
}, (error) => {
    console.log(error);
});


//const promise = promise.then();
//console.log(mixedArray.filter(String))

