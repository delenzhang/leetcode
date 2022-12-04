/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 *  0 -> 1,2
 *
 *  1 -> 3
 *  2 -> 3
 *  2
 *  3 1 2 0
 */
var findOrder = function(numCourses, prerequisites) {
    if (prerequisites.length == 0) {
        return new Array(numCourses).fill(0).map((_, index) => index)
    }
    let couseStatus = new Array(numCourses).fill(0) // 0 未访问， 1 访问中， 2 访问完毕
    let nextCoursMap = new Map()
    for(let item of prerequisites) {
        const [course, preCourse] = item
        if (nextCoursMap.has(preCourse)) {
            nextCoursMap.get(preCourse).push(course)
        } else {
            nextCoursMap.set(preCourse, [course])
        }
    }

    let stack = [], res = []
    for(let i = 0; i < numCourses; i++) {
        if (couseStatus[i] == 0) {
            couseStatus[i] = 1
            stack.push(i)
        }
        while (stack.length > 0) {

            let course = stack[stack.length - 1]
            const nextCourses = nextCoursMap.get(course)
            if (!nextCourses || nextCourses.every(item => couseStatus[item] == 2)) {
                couseStatus[course] = 2
                stack.pop()
                res.unshift(course)
            } else {
                for (let nextCourse of nextCourses) {
                    if (!nextCoursMap.has(nextCourse)) {
                        couseStatus[nextCourse] = 2
                        res.unshift(nextCourse)
                    } else if (nextCoursMap.has(nextCourse) && couseStatus[nextCourse] == 0) {
                        couseStatus[nextCourse] = 1
                        stack.push(nextCourse)
                    } else if (couseStatus[nextCourse] == 1) {
                        return []
                    }
                }
            }
        }
    }
    return res
};
// 0 -> 1,7  7 -> 1
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]))