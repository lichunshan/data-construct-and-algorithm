function AvlTree(){
    var Node = function(key){
      this.key = key;
      this.left = null;
      this.right = null;
    }
    var root = null;
    // 计算树的高度
    function heightNode(node){
        if(node === null){
            return -1;
        } else {
            return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
        }
    }
    //左旋转
    function rotateL(node){
        // 新建一个值等于当前节点的节点
        var newNode = new Node(node.key);
        // 将当前节点的左节点赋给新节点的左节点
        newNode.left = node.left;
        // 将当前节点的右节点的左节点赋给新节点的右节点
        newNode.right = node.right.left;
        node.right.left = null;
        // 将当前节点的右节点作为根节点
        node = node.right;
        // 将当前新节点赋值给当前节点的左节点
        node.left = newNode;
        return node;
    }
    // 右旋转
    function rotateR(node){
        // 新建一个值等于当前节点的节点
        var newNode = new Node(node.key);
        // 将当前节点的右节点赋给新节点的右节点
        newNode.right = node.right;
        // 将当前节点的右节点的左节点赋给新节点的右节点
        newNode.left = node.left.right;
        node.left.right = null;
        // 将当前节点的左节点作为根节点
        node = node.left;
        // 将当前新节点赋值给当前节点的左节点
        node.right = newNode;
        return node;
    }

    // 插入辅助方法
    function insertNode(rootNode, node){
    if(heightNode(rootNode.left) - heightNode(rootNode.right) > 1){
        console.log('右旋转');
        root = rotateR(rootNode);
    }
    if(heightNode(rootNode.right) - heightNode(rootNode.left) > 1){
        console.log('左旋转');
        root = rotateL(rootNode);
        // console.log(rootNode);
    }
     if(rootNode.key > node.key){
      if(rootNode.left === null){
        rootNode.left = node;
      } else {
        insertNode(rootNode.left, node);
      }
     } else {
      if(rootNode.right === null){
        rootNode.right = node;
      } else {
        insertNode(rootNode.right, node);
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
      console.log(JSON.stringify(root));
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
    // 移除一个节点
    var findMinNode = function(node){
      while(node && node.left !== null){
        node = node.left;
      }
      return node;
    }
    var removeNode = function(node, key){
      if(node === null){
        return null;
      }
      if(key < node.key){
        node.left = removeNode(node.left, key);
        return node;
      } else if(key > node.key){
        node.right = removeNode(node.right, key);
        return node;
      } else {
        if(node.left === null && node.right === null){
          node = null;
          return node;
        }
        if(node.left === null){
          node = node.right;
          return node;
        } else if(node.right === null){
          node = node.left;
          return node;
        }
        var aux = findMinNode(node.right);
        node.key = aux.key;
        node.right = removeNode(node.right, aux.key);
        return node;
      }
    }
    this.remove = function(key){
      root = removeNode(root, key);
    }
  }
  
  
  var tree = new AvlTree();
//   tree.insert('44');
//   tree.insert('33');
//   tree.insert('55');
//   tree.insert('22');
//   tree.insert('56');
//   tree.insert('57');
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(60);
tree.insert(80);
tree.insert(90);
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
//   tree.print();
//   tree.remove(44);
  tree.print();