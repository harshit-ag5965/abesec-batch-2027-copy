function promiseFunc(resolve, reject) {
    console.log("I am trying to learn promise");
}

let promise = new Promise(promiseFunc);

console.log(promise);