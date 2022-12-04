/**
 0 1 2
 */

var Trie = function() {
    this.children = new Map()
    this.isEnd = false
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
   let node = this
   for(let char of word) {
       let next = new Trie()
       if (node.children.has(char)) {
           next = node.children.get(char)
       } else {
           node.children.set(char, next)
       }
       node = next
   }
   node.isEnd = true
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this
    for(let char of word) {
        if(node.children.has(char)) {
            const next = node.children.get(char)
            node = next
        } else {
            return false
        }
    }
    return node.isEnd
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this
    for(let char of word) {
        if(node.children.has(char)) {
            const next = node.children.get(char)
            node = next
        } else {
            return false
        }
    }
    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie()
obj.insert("app")
obj.insert("apple")
obj.insert("beer")
obj.insert("add")
obj.insert("jam")
obj.insert("rental")
console.log(obj.search("apps"))
console.log(obj.search("app"))