

const from10 = (num: number) => {
    const array = []
    if(num > 9) {
        for(let i = 10; i <= num; i++) {
            array.push(i)
        }
    } else {
        for(let i = 10; i >= num; i--) {
            array.push(i)
        }
    }
    console.log(array.join(' '))
}

from10(15)
from10(6)



