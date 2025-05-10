/**
 *
 * 
 * function promiseFunc(resolve, reject) {
 *   console.log("I am trying to learn promise");
 * }

 * let promise = new Promise(promiseFunc);

 * console.log(promise);
 * 
 */

// function printResponse(data) {
//     console.log(data);
// }

// function myFetchFunction(url) {
//     //  ......
//     // /////
//     // ......

//     console.log("Fetching data from", url);
//     return new Promise((resolve, reject) => {
//         console.log("Taking some time to fetch users data, please wait...");
//         // const data = [
//         //     { name: "John", age: 26, salary: 100000, pincode: "201201" },
//         //     { name: "Sam", age: 27, salary: 120000, pincode: "201204" }
//         // ];
//         const data = null;
//         setTimeout(() => {
//             if (data == null) {
//                 reject(new Error("Failed to fetch data from given url =", url));
//             }
//             resolve(data);
//         }, 5000);
//     });
// }

// let promise = myFetchFunction("https://fake-json-api.mock.beeceptor.com/users");
// console.log(promise);

// promise
//     .then(response => printResponse(response))
//     .catch(err => console.log(err));

// setTimeout(() => {
//     console.log(promise);
// }, 7000);


function enrichResponse(data) {
    return new Promise((resolve, reject) => {
        if (data == null) {
            reject({ response: null, errorMsg: "failed to fetch users." });
        }
        resolve({ response: data, message: "users data fetched successfully" });
    })
}


let promise = fetch("https://fake-json-api.mock.beeceptor.com/users")
// promise.then(response => {
//     response.json()
//         .then(res => enrichResponse(res)
//             .then(enrichedResponse => console.log(enrichedResponse)));
// });

promise
    .then(response => response.json())
    .then(res => enrichResponse(res))
    .then(enrichedResponse => console.log(enrichedResponse));
