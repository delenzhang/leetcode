
// let cout = 0;
// let queue = new Array(8).fill(-1);
//
//
// function isOk(row, col) {
//    for(let i = 0; i< row; i++) {
//      let preCol = queue[i];
//      if (col == preCol) return false
//      if (Math.abs(preCol - col) === Math.abs(row-i)) {
//        return false
//      }
//    }
//    return true
// }
//
// function eightQueue(row) {
//   for(let col = 0; col < 8; col++) {
//     if (isOk(row, col)) {
//       queue[row] = col;
//       if (row == 7) {
//         cout +=1
//         console.log(queue)
//       } else {
//         eightQueue(row + 1)
//       }
//     }
//   }
// }
//
// eightQueue(0)
// console.log(cout)

function nQueue(n) {
  let cout = 0, queue = new Array(n).fill(-1);
  const res = []
  function isOk(row, col) {
    for(let preRow = 0; preRow < row; preRow++) {
      let preCol = queue[preRow]
      if (preCol == col) return false
      if (Math.abs(preCol - col) === Math.abs(preRow - row)) {
        return false
      }
    }
    return  true
  }
  function getNQueue(row) {
    for(let i = 0; i < n; i++) {
      if (isOk(row, i)) {
        queue[row] = i;
        if (row != n-1) {
          getNQueue(row + 1)
        } else {
          cout++;
          let resItem = []
          for(let item = 0; item< n; item++) {
            let index = queue[item]
            let strArr = new Array(n).fill('.')
            strArr[index] = 'Q'
            resItem.push(strArr.join(''))
          }
          res.push(resItem)
        }
      }
    }
  }
  getNQueue(0);
  return res
}

nQueue(4);

// let queen = new Array(8).fill(-1);
//         // 计数
//         let counter = 0;
//
//         // 判定（curRow，curCol）的位置是否可以放置皇后的方法
//         var isLegal = function(curRow,curCol){
//             // 遍历前面几列
//             for(let preCol=0;preCol<curCol;preCol++){
//                 let preRow = queen[preCol];
//                 // 错误判定：目标行的位置已经有皇后了
//                 if(preRow===curRow){//因为是一列一列的插入的，因此列判定不需要
//                     return false;
//                 }
//
//                 //行与行的差值
//                 let rowDiff = Math.abs(preRow-curRow);
//
//                 //列与列的差值
//                 let colDiff = Math.abs(curCol-preCol);
//
//                 //若行列差值相同，则说明斜线上有皇后,不可摆放
//                 if(rowDiff===colDiff){
//                     return false
//                 }
//             }
//             //遍历完成前几列都没有发现行列或斜线上有皇后，则返回true
//             return true
//         }
//
//         var eightQueen=function(curCol){
//             // for循环含义：尝试将皇后放在当前列的每一行
//             for(let row=0;row<8;row++){
//                 if(isLegal(row,curCol)){
//                     //放置皇后
//                     queen[curCol] = row;
//                     if(curCol!=7){
//                         // 摆放下一列的皇后
//                         eightQueen(curCol+1);
//                     }else{
//                         // 需要注意的是当curCol=7的时候，
//                         // 说明此时已经完成了一种摆放方法，
//                         // 然后for循环继续执行，去尝试其他摆放方法。
//                         counter++;
//                     }
//                 }
//             }
//         }
//         eightQueen(0);
//         console.log(counter);//92