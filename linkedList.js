/**
 * 链表特性
 * 前一个节点存在指向后一个节点的指针
 * 尾节点的后一个指针为null
 */


function LinkedList(){
  var Node = function (elem){
    this.elem = elem;
    this.next = null;
  }
  var head = null;
  var length = 0;

  this.append = function(elem){
    var node = new Node(elem), current;
    if(head === null){
      head = node;
    } else {
      current = head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
    length++;
  }
  this.insert = function(position, elem){
    if(position >= 0 && position <= length){
      let node = new Node(elem),
      head = current,
      previous,
      index = 0;

      if(position === 0){
        node.next = head;
        head = node;
      } else {
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  }
  this.indexOf = function(elem){
    let current = head,
    index = 0;
    while(current){
      if(current.elem === elem){
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  this.removeAt = function(position){
    if(position > -1 && position < length){
      let current = head;
      previous,
      index = 0;
      if(position === 0){
        head = current.next;
      } else {
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.elem;
    }
  }
  this.remove = function(elem){
    let index = this.indexOf(elem);
    return this.removeAt(index);
  }
  this.isEmpty = function(){
    return length === 0;
  }
  this.size = function(){
    console.log(length);
    return length;
  }
  this.toString = function(){
    console.log(JSON.stringify(head));
  }
}

var link = new LinkedList();
link.append('12');
link.append('33');
link.append('33');
link.append('33');
link.append('33');
link.append('33');
link.insert(2, '44');
link.size();
link.toString();
