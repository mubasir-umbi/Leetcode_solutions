//232. Implement Queue using Stacks

var MyQueue = function() {
    this.items = []
};

MyQueue.prototype.push = function(x) {
    this.items.unshift(x)
};

MyQueue.prototype.pop = function() {
    return this.items.pop()
};

MyQueue.prototype.peek = function() {
    return this.items[this.items.length-1]
};

MyQueue.prototype.empty = function() {
    return this.items.length === 0
};