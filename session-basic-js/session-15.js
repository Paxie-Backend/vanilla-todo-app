const products = ['Laptop', 'Mouse', 'Keyboard'];
const student = {
    name: 'Siti',
    age: 21,
    major: 'Informatics',
};

function logger() {
    console.log(products.includes('Mouse'));
    console.log(products.indexOf('Keyboard'));
    console.log(products.join(', '));

    console.log(Object.keys(student));
    console.log(Object.values(student));
    console.log(student.hasOwnProperty('grade'));
    console.log(products);
}

logger();
