function kmpNext(needle) {
  const next = []
  next[0] = -1
  let k = -1
  for(let i = 1; i <needle.length; i++ ) {
    //我们此时知道了 [0,i-1]的最长前后缀，但是k+1的指向的值和i不相同时，我们则需要回溯
            //因为 next[k]就时用来记录子串的最长公共前后缀的尾坐标（即长度）
            //就要找 k+1前一个元素在next数组里的值,即next[k+1]
      while (k != -1 && needle[k + 1] != needle[i]) {
              k = next[k];
          }
          // 相同情况，就是 k的下一位，和 i 相同时，此时我们已经知道 [0,i-1]的最长前后缀
          //然后 k - 1 又和 i 相同，最长前后缀加1，即可
          if (needle[k+1] == needle[i]) {
              ++k;
          }
          next[i] = k;
  }
  return next
}

function indexOf(haystack,  needle) {
        if (needle.length == 0) {
            return 0;
        }
        const next = kmpNext(needle)
        let j = -1; // // 因为next数组里记录的起始位置为-1
        for (let i = 0; i < haystack.length; i++) { // 注意i就从0开始
            while(j >= 0 && haystack[i] != needle[j + 1]) { // 不匹配
                j = next[j]; // j 寻找之前匹配的位置
            }
            if (haystack[i] == needle[j + 1]) { // 匹配，j和i同时向后移动
                j++; // i的增加在for循环里
            }
            if (j == (needle.length - 1) ) { // 文本串s里出现了模式串t
                return (i - needle.length + 1);
            }
        }
        return -1;
}


let a = 'bcbcbea', b = "bcb"
console.log(indexOf(a, b))

function kmpNextMy(needle) {
    const next = []
    next[0] = -1

}