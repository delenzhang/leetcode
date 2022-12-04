/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    let l = times.length
    let chairPool = []
    let chairIndex = 0
    let timeArr = []
    let peopleChairs = {} //new Array(l).fill(-1)
    times.forEach((item, index) => {
        const [arr, leaving] = item
        timeArr.push([arr, index, 1])
        timeArr.push([leaving, index, 0])
    })
    timeArr.sort((a, b) => {
        if (a[0] == b[0]) {
            return a[2] - b[2]
        } else if (a[0] == b[0] && a[2] == b[2]) {
            return a[1] -b[1]
        }
        return a[0] - b[0]
    })

    for(let i = 0; i < 2 * l; i++) {
        const [time, people, type] = timeArr[i]
        let num
        if (type == 1) {
            if (chairPool.length > 0) {
                num = chairPool.shift()
            } else {
                num = chairIndex++
            }
            peopleChairs[people] = num
        } else {
             // chairPool.push(peopleChairs[people])

             // chairPool.sort()
             let chairIndex = peopleChairs[people]
            peopleChairs[people] = -1
             if (chairPool.length === 0) {
                 chairPool.push(chairIndex)
             } else {

                  if (chairIndex < chairPool[0]) {
                      chairPool.unshift(chairIndex)
                  } else if (chairIndex > chairPool[chairPool.length -1]) {
                      chairPool.push(chairIndex)
                  } else {
                      for(let j = 0; j < chairPool.length; j++) {
                        if (chairPool[j] > chairIndex) {
                            chairPool.splice(j, 0,  chairIndex)
                            break
                        }
                     }
                  }
             }

        }
        if (people == targetFriend) {
            console.log(num, peopleChairs)
            return peopleChairs[targetFriend]
        }
    }
};

smallestChair([[3,10],[1,5],[2,6]], 0) // 2

smallestChair([[33889,98676],[80071,89737],[44118,52565],[52992,84310],[78492,88209],[21695,67063],[84622,95452],[98048,98856],[98411,99433],[55333,56548],[65375,88566],[55011,62821],[48548,48656],[87396,94825],[55273,81868],[75629,91467]]
,6) //2
//
smallestChair([[4,5],[12,13],[5,6],[1,2],[8,9],[9,10],[6,7],[3,4],[7,8],[13,14],[15,16],[14,15],[10,11],[11,12],[2,3],[16,17]]
,15) //0

smallestChair([[98198,99979],[94438,98042],[6104,64150],[15632,17378],[6923,88529],[68469,98315],[37973,86066],[90969,99746],[92396,96991],[53994,66509],[92972,97874],[70262,84374],[50387,64907],[99240,99985],[25642,56565],[7253,9683],[43669,68559],[60520,85461],[96567,97544],[64789,83994],[73723,84301],[55796,58566],[67943,78915],[92673,94868],[53570,58135],[69549,78461],[17694,75744],[9265,77868],[57880,89655],[23327,80521],[91232,91639],[91623,92961],[49501,88454],[88932,91622],[54965,59650],[46587,60025],[45140,98782],[47029,90516],[28112,29624],[73021,83152],[5377,19703],[70610,72191],[40633,66034],[87913,98864],[35913,50422],[39121,93376],[21100,79841],[8190,68139],[5140,54276],[22993,62342],[3491,8572],[70407,81025],[81198,96920],[29041,31796],[77060,81160],[94588,97686]]
,50) // 0

smallestChair([[65253,94097],[53112,69530],[81932,93953],[580,17372],[68060,71030],[89288,90296],[44959,88547],[6214,54011],[97818,99471],[78902,97146],[71212,82972],[59442,86960],[72154,86992],[53663,80857],[48804,48973],[21405,23283],[96683,97745],[44529,57089],[82381,95500],[77233,98954],[46567,78575],[61841,63803],[6965,8982],[73406,91256],[2908,44896],[13652,60043],[38007,70678],[39164,84350],[82783,83192],[12047,44261],[38040,95704],[91821,95627],[95954,96558],[42939,49574],[35645,85888],[88399,89499],[35336,95198],[29465,42867],[2901,59586],[27777,81800],[60421,76192],[24437,55571],[69910,91110],[19882,80672],[19066,61320],[56677,74370],[71594,84251],[38251,41916],[31467,66022],[76687,88548],[52754,91352],[10343,20946],[99927,99962],[45952,53275],[97823,98554],[48115,48895],[51322,66032],[69261,83519],[8709,58686],[43490,50560],[93228,98446],[16041,56850],[34634,68772],[15413,81430],[65434,79855],[37254,58101],[61815,89611],[49288,58728],[36730,99097]]
,0) // 5

smallestChair([[18,19],[10,11],[21,22],[5,6],[2,3],[6,7],[43,44],[48,49],[53,54],[12,13],[20,21],[34,35],[17,18],[1,2],[35,36],[16,17],[9,10],[14,15],[25,26],[37,38],[30,31],[50,51],[22,23],[3,4],[27,28],[29,30],[33,34],[39,40],[49,50],[15,16],[4,5],[46,47],[51,52],[32,33],[11,12],[28,29],[47,48],[36,37],[40,41],[42,43],[52,53],[41,42],[31,32],[23,24],[8,9],[19,20],[24,25],[26,27],[45,46],[44,45],[7,8],[13,14],[38,39]]
,8) // 0