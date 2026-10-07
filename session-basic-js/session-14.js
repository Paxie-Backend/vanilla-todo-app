const isJava = true;
let berat = 12;
let price = isJava ? 5000 : 5500;
let total = 0;

total = price * berat;

if (berat > 10) {
    let beratDiskon = berat - 10;
    let totalDiskon = beratDiskon * 500;

    total = total - totalDiskon;
}

console.log(total);

function meet(name = null) {
    console.log(name);
}

meet()