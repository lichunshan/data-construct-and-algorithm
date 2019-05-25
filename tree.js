function BinarySearchTree(){
  var Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
  var root = null;
  // 插入辅助方法
  function insertNode(root, node){
   if(root.key > node.key){
    if(root.left === null){
      root.left = node;
    } else {
      insertNode(root.left, node);
    }
   } else {
    if(root.right === null){
      root.right = node;
    } else {
      insertNode(root.right, node);
    }
   }
  }
  this.insert = function(key){
    var newNode = new Node(key);
    if(root === null){
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  }
  this.print = function(){
    console.log(root);
  }
  // 中序遍历
  var inOrderTraverseNode = function(node, callback){
    if(node !== null){
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  }
  this.inOrderTraverse = function(callback){
    inOrderTraverseNode(root, callback);
  }

  // 先序遍历
  var preOrderTraverseNode = function(node, callback){
    if(node !== null){
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  }
  this.preOrderTraverse = function(callback){
    preOrderTraverseNode(root, callback);
  }

  // 后序遍历
  var postOrderTraverseNode = function(node, callback){
    if(node !== null){
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }
  this.postOrderTraverse = function(callback){
    postOrderTraverseNode(root, callback);
  }
  // 查询最小值
  var minNode = function(node){
    if(node){
      while(node && node.left !== null){
        node = node.left;
      }
      return node.key;
    }
    return null;
  }
  this.min = function(node, key){
      return minNode(root);
  }
  // 查询最大值
  var maxNode = function(node){
    if(node){
      while(node && node.right !== null){
        node = node.right;
      }
      return node.key;
    }
    return null;
  }
  this.max = function(){
    return maxNode(root);
  }
  // 查询一个特定值
  var searchNode = function(node, key){
    if(node === null){
      return false;
    }
    if(key < node.key){
      return searchNode(node.left, key);
    }
    if(key > node.key){
      return searchNode(node.right, key);
    }
    return true;
  }
  this.search = function(key){
    return searchNode(root, key);
  }
}


var tree = new BinarySearchTree();
tree.insert('44');
tree.insert('33');
tree.insert('55');
tree.insert('22');
// tree.print();
// tree.inOrderTraverse(function(key){
//   console.log(key);
// });
// tree.preOrderTraverse(function(key){
//   console.log(key);
// });
tree.postOrderTraverse(function(key){
  console.log(key);
});
console.log("min:" + tree.min());
console.log("max:" + tree.max());
console.log("search(33)" + tree.search(33));
console.log("search(3)" + tree.search(3));