function testPromise() {
    let a = new Promise((res, rej) => {
        setTimeout(() => {
            rej('a rej')
        }, 1000)
    })
    let b = new Promise((res, rej) => {
        setTimeout(() => {
            rej('b rej')
        }, 200)
    })
    Promise.all([a, b]).catch(err => {
        console.log(err)
    })
}
testPromise()