// let func = async function () {
//     console.log("hello")
// }

// console.log(func());

let func2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [
                { name: "John", age: 26, salary: 100000, pincode: "201201" },
                { name: "Sam", age: 27, salary: 120000, pincode: "201204" }
            ];
            resolve(data);
        }, 4000);
    })
}

async function printsData() {
    //    func2().then(res => console.log(res)); 
    // const data = await func2();
    // console.log(data);

    const response = await (await fetch("https://fake-json-api.mock.beeceptor.com/users")).json();
    // const jsonResponse = await response.json();
    console.log(response);

}

printsData();

