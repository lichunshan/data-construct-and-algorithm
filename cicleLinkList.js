var CircleLinkList = function(){
    var Node = function(elem){
        this.elem = elem;
        this.prev = null;
        this.next = null;
    }
    var head = null,
    length = 0;
    this.append = function(elem){
        let node = new Node(elem);
        if(!head){
            head = node;
        } else {
            var current = head;
            while(current.next){
                current = current.next;
            }
            // current.next = node;
            // head = node.next;
            // node = head.prev;
            current.next = node;
            node.prev = current;
            node.next = head;
        }
        length++;
    }
    this.insert = function(position, elem){
        if(position >= 0 && positoin <= length){
            let node = new Node(elem);
            if(position === 0){
                if(head){
                    let current = head;
                    while(current){
                        current = current.next;
                    }
                    current.next = node;
                    current = node.prev;
                    head = node.next;
                } else {
                    head = node;
                }
            } else if(position === length){
                let current = head;
                while(current){
                    current = current.next;
                }
                node.next = head;
                node.prev = current;
            } else {
                let previous,
                current = head,
                index = 0;
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.prev = previous;
                node.next = current;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }
    this.size = function(){
        console.log(length);
        return length;
    }
    this.print = function(){
        console.log(head);
    }
}

var circleLinkList = new CircleLinkList();
circleLinkList.append('22');
circleLinkList.append('33');
circleLinkList.append('33');
circleLinkList.print();