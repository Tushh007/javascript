const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount
    }
}

const tip20 = createTipper(.2)
const tip30 = createTipper(.3)

console.log(tip20(100))
console.log(tip30(100))


