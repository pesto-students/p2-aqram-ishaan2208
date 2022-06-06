function getNumber() {
    return Math.round(Math.random() * 5)
}

console.log(getNumber());


const p = new Promise((resolve, reject) => {
    let myNumber = getNumber();
    if (myNumber % 5 === 0) {
        resolve()
    } else {
        reject()
    }

})

p.then(() => console.log('Divisible by 5')).catch(() => console.log('Not divisible'))