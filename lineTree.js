// 顺序存储结构

// 双亲表示法

var Node = function(data, parent){
  this.data = data;
  this.parent = parent;
}

var ParentTree = function(){
  var data;
  this.initTree();
}

ParentTree.prototype  = {
  checkNodeType: function(data){
    if(data.constructor !== Node){
      throw new Error('需要传入节点类型');
    }
  },
  initTree: function(){
    data = [];
    console.log('init');
  },
  destoryTree: function(){
    data = null;
    console.log('destory');
  },
  createTree: function(dataArr){
    data = data.concat(dataArr);
    console.log(data);
  },
  clearTree: function(){
    data = [];
  },
  treeEmpty: function(){
    return data.length == 0;
  },
  treeDepth: function(){
    var parentArr = [];
    if(this.treeEmpty()){
      return 0;
    }
    for(var i = 0; i < data.length; i++){
      parentArr.push(data[i].parent);
    }
    // console.log(parentArr);
    // console.log(Math.max.apply(null, parentArr) + 2);
    return Math.max.apply(null, parentArr) + 2;
  },
  root: function(){
    if(this.treeEmpty()){
      return null;
    }
    return data.filter(function(item){
      return item.parent == -1;
    })
  },
  value: function(cur_e){
    this.checkNodeType(cur_e);
    return cur_e.data;
  },
  assign: function(cur_e, value){
    this.checkNodeType(cur_e);
    cur_e.data = value;
    return true;
  },
  parent: function(cur_e){
    this.checkNodeType(cur_e);
    if(cur_e.parent == -1){
      return null;
    } else {
      return data[cur_e.parent];
    }
  },
  leafId: function(){
    console.log(this.treeDepth() - 2);
    return this.treeDepth() - 2;
  },
  leftChild: function(cur_e){
    this.checkNodeType(cur_e);
    var leafId = this.leafId();
    if(cur_e.parent == leafId){
      return null;
    } else {
      // console.log(data.filter((item)=>item.parent == leafId - 1)[0])
      return data.filter((item)=>item.parent == leafId - 1)[0];
    }
  },
  getIndex: function(cur_e){
    this.checkNodeType(cur_e);
    for(var i = 0; i < data.length; i++){
      if(data[i].data == cur_e.data && data[i].parent == cur_e.parent){
        return i;
      }
    }
    return -1;
  },
  rightSibling: function(cur_e){
    var currentNodeIndex = this.getIndex(cur_e);
    var siblingArr = data.slice(currentNodeIndex + 1);
    if(siblingArr.length == 0){
      return [];
    } else {
      return siblingArr.filter((item)=> item.parent == data[currentNodeIndex].parent);
    }
  },
  insertChild: function(){

  },
  deleteChild: function(cur_e, i){
    // 判断当前节点是否有子节点，没有返回null
    var currentNodeIndex = this.getIndex(cur_e);
    if(currentNodeIndex === -1){
      return;
    }

    // 有则获取所有子节点数组
    var childNodes = data.filter((item)=>item.parent == currentNodeIndex);
    // 删除子节点数组中索引为i的节点，并更新后续节点，将parent -1
    if(childNodes[i]){
      childNodes = childNodes.splice(i,1);
      
    } else {

    }
    
  }
}

var parentTree1 = new ParentTree();

var tdata = [
  {
    data: '保罗一世',
    parent: -1
  },
  {
    data: '保罗二世（1）',
    parent: 0
  },
  {
    data: '保罗二世（2）',
    parent: 0
  },
  {
    data: '保罗二世（3）',
    parent: 0
  },
  {
    data: '保罗三世',
    parent: 1
  }
];
parentTree1.createTree(tdata);
parentTree1.treeDepth();
var root1 = parentTree1.root();
console.log(root1);
var val = parentTree1.value(new Node('节点值', 1));
console.log(val);
parentTree1.leftChild(new Node(tdata[0].data, tdata[0].parent));
var index = parentTree1.getIndex(new Node(tdata[0].data, tdata[0].parent));
console.log(index);
var rightSibling = parentTree1.rightSibling(new Node(tdata[1].data, tdata[1].parent));
console.log(rightSibling);
// parentTree1.destoryTree();