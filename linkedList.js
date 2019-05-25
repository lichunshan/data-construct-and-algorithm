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

  }
  this.remove = function(position){
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
      }
    }
  }
  this.indexOf = function(){}
  this.removeAt = function(){}
  this.isEmpty = function(){}
  this.size = function(){
    console.log(length);
    return length;
  }
  this.toString = function(){
    console.log(head);
  }
}

var link = new LinkedList();
link.append('12');
link.append('33');
link.size();
link.toString();
