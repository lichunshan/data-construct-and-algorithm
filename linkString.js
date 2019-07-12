var LinkString = function(){
  var head = null, len = 0;
  var LinkStringData = function(char){
    this.data = char;
    this.next = null;
  }
  // 获取最后一个节点
  function getFailNode(head){
    var current = head;
    while(current.next){
      current = current.next;
    }
    return current;
  }
  // 生成串
  this.strAssign = function(str){
    for(var i = 0; i < str.length; i++){
     if(head === null){
      head = new LinkStringData(str[i]);
     } else {
      var failData = getFailNode(head);
      failData.next = new LinkStringData(str[i]);
     }
     len++;
    }
    return head;
  }
  // 复制串
  this.strCopy = function(strHead){
    strHead ? strHead = strHead : strHead = head;
    if(strHead !== null){
      var newLinkString = new LinkStringData();
      newLinkString.data = strHead.data;
      var current = strHead;
      while(current.next){
        var node = new LinkStringData(current.next.data);
        var fail = getFailNode(newLinkString);
        fail.next = node;
        current = current.next;
      }
    }
    return newLinkString;
  }
  // 串长度
  this.strLength = function(){
    return len;
  }
  // 求子串
  this.subStr = function(startPos){
    if(startPos > len || startPos < 0){return null}
    var i = 0, current = head;
    while(i < startPos){
      current = current.next;
      i++;
    }
    return this.strCopy(current);
  }
  this.sliceStr = function(startPos, items){
    var childStr = this.subStr(startPos),
    sliceChildStr = new LinkStringData(childStr.data),
    i = 0;
    while(i < items - 1){
      var node = new LinkStringData(childStr.next.data),
      failNode = getFailNode(sliceChildStr);
      failNode.next = node;
      childStr = childStr.next;
      i++;
    }
    return JSON.stringify(sliceChildStr);
  }
  // 插入串
  this.insertStr = function(startPos, linkStringObj){
    if(startPos < 0 || startPos > len){return false}
    i = 0,
    posNode = head;
    while(i < startPos){
      posNode = posNode.next;
      i++;
    }
    var insert_str_end = getFailNode(linkStringObj);
    var ss = posNode.next.next;
    insert_str_end.next = ss;
    posNode.next = linkStringObj;
    return JSON.stringify(posNode);
  }
  this.getChar = function(char){
    var index = 0, current = head;
    if(len > 0){
      if(char === current.data){ return index;}
      while(current.next){
        if(current.data === char){
          return index;
        }
        current = current.next;
        index++;
      }
      return -1;
    }
  }
  this.removeAt = function(position){
    if(position < 0 || position > len){
      return;
    }
    if(position === 0){
      head = head.next;
    } else {
      var index = 0, current = head;
      while(index < position - 1){
        current = current.next;
        index++;
      }
      var nextNode = current.next.next;
      current.next = nextNode;
    }
    return head;
  }
  this.remove = function(char){
    var index = this.getChar(char);
    this.removeAt(index);
  }
  this.print = function(){
    console.log(JSON.stringify(head));
  },
  this.get = function(){
    return this.strCopy(head);
  }
}

var a = new LinkString();
a.strAssign('hello world!');
// var b = a.strCopy();

// a.print();
// console.log(b);
// console.log(a.strLength());
// var sub = a.sliceStr(1, 3);
// var c = new LinkString();
// c.strAssign('rrr444');
// var insert = a.insertStr(1, c.get());
// // console.log(sub);
// console.log(insert);
console.log(a.getChar('e'));
a.print();
a.removeAt(0);
a.print();
console.log(a.getChar('h'));
a.remove('h');
a.print();