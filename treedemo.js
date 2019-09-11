var BinarySearchTree = function(){
  var Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
  var root = null;
  function insertNode(node, key){
    var newNode = new Node(key);
    if(node.key > key){
      if(node.left === null){
        node.left = newNode;
      } else {
        insertNode(node.left, key);
      }
    } else {
      if(node.right === null){
        node.right = newNode;
      } else {
        insertNode(node.right, key);
      }
    }
  }
  this.insertNode = function(key){
    if(root === null){
      root = new Node(key);
    } else {
      insertNode(root, key);
    }
  }
  this.print = function(){
    console.log(root);
  }
  // 中序遍历
  function inorderTraverse(node, callback){
    if(node !== null){
      inorderTraverse(node.left, callback);
      callback(node.key);
      inorderTraverse(node.right, callback);
    }
  }
  this.inorderTraverseNode = function(callback){
    inorderTraverse(root,callback);
  }
  // 先序遍历
  function preOrderTraverse(node, callback){
    if(node !== null){
      callback(node.key);
      preOrderTraverse(node.left, callback);
      preOrderTraverse(node.right, callback);
    }
  }
  this.preOrderTraverseNode = function(callback){
    preOrderTraverse(root,callback);
  }
  // 后序遍历
  function postOrderTraverse(node, callback){
    if(node !== null){
      postOrderTraverse(node.left, callback);
      postOrderTraverse(node.right, callback);
      callback(node.key);
    }
  }
  this.postOrderTraverse = function(callback){
    postOrderTraverse(root,callback);
  }
  // 查找最小节点
  function getMin(node){
    while(node !== null && node.left !== null){
      node = node.left;
    }
    return node.key;
  }
  this.min = function(node){
    return getMin(root);
  }
  // 查找最大节点
  function getMax(node){
    while(node !== null && node.right !== null){
      node = node.right;
    }
    return node.key;
  }
  this.max = function(){
    return getMax(root);
  }
  // 查找一个节点是否存
  function searchNode(node, key){
    if(node === null){
      return false;
    } else {
      if(node.key < key){
        return searchNode(node.right, key);
      }
      if(node.key > key){
        return searchNode(node.left, key);
      }
      return true;
    }
  }
  this.search = function(key){
    return searchNode(root, key);
  }
  function getMinNode(node){
    while(node !== null && node.left !== null){
      node = node.left;
    }
    return node;
  }
  function removeNode(node, key){
    if(node.key > key){
      node.left = removeNode(node.left, key);
      return node;
    } else if(node.key < key){
      node.right = removeNode(node.right, key);
      return node;
    } else {
      if(node.left === null && node.right === null){
        console.log('他来了');
        node = null;
        return node;
      }
      if(node.left === null && node.right !== null){
        node = node.right;
        return node;
      }
      if(node.right === null && node.left !== null){
        node = node.left;
        return node;
      }
      if(node.left !== null && node.right !== null){
        var rightMinNode = getMinNode(node.right);
        removeNode(node.right, rightMinNode.key);
        node = rightMinNode;
        return node;
      }
    }
    
  }
  // 删除节点
  this.remove = function(key){
    if(root === null){
      return null;
    } else {
      return removeNode(root, key);
    }
  }
}

var tree = new BinarySearchTree();
tree.insertNode('44');
tree.insertNode('24');
tree.insertNode('34');
tree.insertNode('14');
tree.print();
tree.inorderTraverseNode(function(key){
  console.log(key);
});
console.log("****先序遍历");
tree.preOrderTraverseNode(function(key){
  console.log(key);
});
console.log("*****后续遍历");
tree.postOrderTraverse(function(key){
  console.log(key);
});
var min = tree.min();
console.log("获取最小节点:" + min);
var max = tree.max();
console.log("获取最大节点:" + max);

var has = tree.search("14");
console.log("****判断节点是否存在:" + has);
var afterDel = tree.remove(14);
console.log("删除后的树:");
console.log(afterDel);