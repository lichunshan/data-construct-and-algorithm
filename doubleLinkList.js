var DoubleLinkList = function(){
    var Node = function(elem){
        this.elem = elem;
        this.prev = null;
        this.next = null;
    }
    var head = tail = null,
    length = 0;
    this.append = function(){
        var node = new Node();
        if(head){
            head.next = node;
            node.prev = head;
            node.next = tail;
        }
        length++;
    }
    this.insert = function(position, elem){
        if(position >= 0 && position <= length){
            var node = new Node(elem);
            var current = head,
            previous,
            index = 0;
            if(position === 0){
                if(!head){
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if(position === length){
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while(index++ < length){
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                node.prev = previous;
                node.next = current;
                current.prev = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }
}