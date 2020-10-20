const products = []
const product = products[0]

// Truthy - Value that resolves to True in booloean context
// Falsy - Values that resulves to False in boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN

if (product !== undefined) {
    console.log('Product found!')
} else {
    console.log('Product not found!')
}