function leastInterval(tasks: string[], n: number): number {
    let l = tasks.length,  taskMap = new Map()
    if (n == 0) {
        return l
    }
    for (let task of tasks) {
        if (taskMap.has(task)) {
            taskMap.set(task,taskMap.get(task) + 1)
        } else {
            taskMap.set(task, 1)
        }
    }
    let max = Math.max(...Array.from(taskMap.values()))
    let ret = (max - 1) * (n + 1)
    Array.from(taskMap.values()).forEach(item => {
        if (item === max) {
            ret++
        }
    })
    return Math.max(l, ret)


};