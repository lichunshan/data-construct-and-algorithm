var CircleLinkList = function(){
    var Node = function (elem){
        this.elem = elem;
        this.next = null;
      }
      var head = tail = null;
      var length = 0;
    
      this.append = function(elem){
        var node = new Node(elem), current;
        if(head === null && tail === null){
          head = tail = node;
        } else {
          current = head;
          while(current.next && current.next !== head){
            current = current.next;
          }
          tail = current;
          tail.next = node;
          node.next = head;
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
          } else if(position === length){
            tail = node;
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
      this.print = function(){
        console.log(head);
        return head;
      }
}

var circleLinkList = new CircleLinkList();
circleLinkList.append('22');
circleLinkList.append('33');
circleLinkList.append('44');
let list = circleLinkList.print();
console.log(list.elem);
console.log(list.next.elem);
console.log(list.next.next.elem);
console.log(list.next.next.next.elem);