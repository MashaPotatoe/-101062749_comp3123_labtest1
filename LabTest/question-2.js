// callback after resolvedPromise resolve a message after 
//timeout of 500ms

const resolvedPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("This is a 500  mili seconds resolve!");
    }, 500)
});

const rejectedPromise = new Promise((reject) => {
    setTimeout(() => {
        reject("This is a 500 mili seconds reject!");
    }, 500)
});

resolvedPromise.then((message) => {
    console.log(message);
})

rejectedPromise.then((message) => {
    console.log(message);
})




