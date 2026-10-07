const numbers = [1, 2, 3, 4, 5];
let squaredNums = [];

function delayMultiply(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 1000);
    });
}

async function syncProcessNums() {
    for (const num of numbers) {
        squaredNums.push(await delayMultiply(num));
    }

    console.log(squaredNums);
}

await syncProcessNums();

// async function asyncProcessNums() {
//     for (const num of numbers) {
//         squaredNums.push(delayMultiply(num));
//     }

//     console.log(await Promise.all(squaredNums));
// }

// await asyncProcessNums();
