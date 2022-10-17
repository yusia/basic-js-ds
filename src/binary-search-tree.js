const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const el = new Node(data);
    if (this._root === null) {
      this._root = el;
    } else {
      let freeLeaf = this.getLeafToAdd(this._root, data);

      if (freeLeaf.data > data) {
        freeLeaf.left = el;
      } else {
        freeLeaf.right = el;
      }
    }
  }

  getLeafToAdd(el, data) {
    if (el.data > data) {
      if (el.left === null) return el;
      return this.getLeafToAdd(el.left, data);
    } else {
      if (el.right === null) return el;
      return this.getLeafToAdd(el.right, data);
    }
  }

  has(data) {
    return this._findLeaf(this._root, data) === null ? false : true;
  }

  find(data) {
    return this._findLeaf(this._root, data);
  }

  _findLeaf(el, data) {
    if (!el) return null;
    if (el.data === data) return el;
    else if (el.data > data) {
      if (el.left === null) return null;
      return this._findLeaf(el.left, data);
    } else {
      if (el.right === null) return null;
      return this._findLeaf(el.right, data);
    }
  }

  remove(data) {
    if (this.has(data)) {
      let parent=null;
      
      let deleted = this._findLeaf(data);
      //todo
      deleted = deleted.left;
      
    }
  }

  min() {
    if (this.root()) return this._min(this._root, this._root.data);
    return null;
  }

  _min(el, currentMin) {
    if (el.data <= currentMin) {
      currentMin = el.data;
      if (el.left === null) return currentMin;
      return this._min(el.left, currentMin);
    }
    return currentMin;
  }

  max() {
    if (this.root()) return this._max(this._root, this._root.data);
    return null;
  }
  _max(el, currentMax) {
    if (el.data >=currentMax) {
      currentMax = el.data;
      if (el.right === null) return currentMax;
      return this._max(el.right, currentMax);
    }
    return currentMax;
  }
}
module.exports = {
  BinarySearchTree,
};
