// ? Async functions are a way to work with asynchronous code in a more synchronous way. They are built on top of promises and are syntactic sugar for promises.

console.log("Ordering your pizza...");

// Creating a promise
const pizzaPromise = () => {
    return new Promise((resolve, reject) => {
        let order = true;

        if (order) {
            setTimeout(() => { // setTimeout is used to simulate a delay
                resolve("After 5 seconds, Pizza delivered!");
            }, 5000);
        } else {
            setTimeout(() => {
                // setTimeout is used to simulate a delay
                reject("After 5 seconds, Pizza not delivered");
            }, 5000);
        }
    });
};

// Calling the function with a promise
pizzaPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("Waiting for your pizza...");
