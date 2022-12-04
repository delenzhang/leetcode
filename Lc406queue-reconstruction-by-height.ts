// @ts-ignore
function reconstructQueue(people: number[][]): number[][] {

    function isBigger(a, b) {
        if (a[1] == b[1]) {
            return a[0] > b[0]
        }
        if (a[0] == b[0]) {
            return a[1] > b[1]
        }
        if (a[0] > b[0]) {
            if (a[1] < b[1]) {
                return false
            } else {
                return true
            }
        } else {
            if (a[1] < b[1]) {
                return false
            } else {
                return true
            }
        }

    }
    quickSort(0, people.length - 1)
    console.log(people)
    return people
    // 3 1 5 4
    function quickSort(i, j) {
        if (i > j) return
        let pivot = people[i], start = i + 1, end = j
        while (start < end) {
            while (isBigger(people[end], pivot)) {
                end--
            }
            while (isBigger(pivot, people[start])) {
                start++
            }
            if (end > start) {
                swap(start, end)
            }
            ++start
        }
        swap(i, end)
        quickSort(i,end-1)
        quickSort(end+1, j)
    }

    function swap(i, j) {
        let temp = people[i]
        people[i] = people[j]
        people[j] = temp
    }

};

reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]])