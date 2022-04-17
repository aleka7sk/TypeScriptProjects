

const upTo = (num: number) => {
    let array = []
    for(let i = 0; i <= num; i++) {
        array.push(i)
    }
    return array.join(' ')
}

console.log(upTo(3))
