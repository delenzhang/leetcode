/**
 * 实现repeat
题目描述



实现repeat功能，以wait时间间隔执行func函数times次
function repeat(func, times, wait) {
}

function log(msg) {
 console.log(msg)
}
const repeatFunc = repeat(log, 3, 2000)
// 调用 repeatFunc('test')，会打印3次test, 每次间隔2秒
 * @param func
 * @param times
 * @param wait
 * @returns {(function(*): void)|*}
 */
function repeat(func, times, wait) {
    let time = 1, timer = 0
    function fn(...args) {
        if (time == 1) {
            func.apply(null, args)
        }

        timer = setTimeout(() => {
            if (time++ < times) {
                func.apply(null, args)
                fn.apply(null, args)
            } else {
                clearTimeout(timer)
            }
        }, wait)
    }
    return (msg) => {
        fn(msg)
    }
}

function log(msg) {
 console.log(msg)
}
const repeatFunc = repeat(log, 3, 2000)
repeatFunc('test')
