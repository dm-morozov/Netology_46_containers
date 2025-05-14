const product = [
    {
        name: "ecco",
        size: [36, 37, 38, 39],
    },
    {
        name: "ralf",
        size: [36, 37, 38, 40],
    }
]

console.log(product[0].name)

const sizes = product.reduce((accumulator, currentValue) => {
    accumulator.push(...currentValue.size);
    return accumulator;
}, []);

const uniqueSizesData = sizes.reduce((acc, currentValue) => {
    acc[currentValue] = true;
    return acc;
}, {});

const setSize = new Set(sizes);

console.log(setSize.has(36));
setSize.delete(36);
console.log(setSize)
console.log(setSize.has(36));

console.log(uniqueSizesData)
console.log(Object.keys(uniqueSizesData))

const sizeSet = product.reduce((target, item) => {
    item.size.forEach(size => target.add(size));
    return target;
}, new Set);

console.log(sizeSet);