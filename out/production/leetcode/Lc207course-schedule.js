/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let indegs = new Array(numCourses).fill(0), visited = 0
    let courseMap = new Map()
    for(let item of prerequisites) {
        const [course, precourse] = item
        indegs[course]++
        if (courseMap.has(precourse)) {
            courseMap.get(precourse).push(course)
        } else {
            courseMap.set(precourse, [course])
        }
    }
    let list = []
    for(let i = 0; i < numCourses; i++) {
        if (indegs[i] === 0) {
            list.push(i)
        }
    }
    while(list.length > 0) {
        let course = list.shift()
        ++visited
        const nextCourses = courseMap.get(course) || []
        for(let item of nextCourses) {
            --indegs[item]
            if (indegs[item] == 0) {
                list.push(item)
            }
        }
    }
    return visited == numCourses
};

console.log(canFinish(2, [[1,0], [0, 1]]))