class linkList{
    constructor(data){
        this.head = {
            value : data,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }

    insertNode(data){
        var newNode = {
            value : data,
            next : null
        }
        if(this.head.next == null){
            this.head.next = newNode;
            this.tail = newNode;
            this.length++;
        } else{
            this.temp = this.head;
            while(this.temp.next !== null){
                this.temp = this.temp.next;
            }
            this.temp.next = newNode;
            this.tail = newNode;
            this.length++;

        }      
    }

    printList(){
        this.temp = this.head;
        do {
            console.log(this.temp.value);
            this.temp = this.temp.next;
        }while(this.temp !== null)
    }

    insertNodeINMiddle(data, key){
        this.temp = this.head;
        var newNode = {
            value : data,
            next : null
        }
        while(this.temp.value !== key){
            this.temp = this.temp.next;
        }
        this.temp1 = this.temp.next;
        this.temp.next = newNode;
        newNode.next = this.temp1;

    }

    deleteNodeInMiddle(key){
        this.temp = this.head;
        while(this.temp.value !== key){
            this.temp1 = this.temp;
            this.temp = this.temp.next;
        }
        this.temp1.next = this.temp.next;
        this.temp.next = null;
    }
}

var myList = new linkList(10);
myList.insertNode(20)
myList.insertNode(30)
myList.insertNode(40)

console.log(myList)
myList.printList()
myList.insertNodeINMiddle(50,20);
console.log("linked list after insertion of new node in middle")
myList.printList()
console.log("linked list after delete middle node")
myList.deleteNodeInMiddle(50);
myList.printList()


/* OUTPUT 
linkList {
  head: { value: 10, next: { value: 20, next: [Object] } },
  tail: { value: 40, next: null },
  length: 4,
  temp: { value: 30, next: { value: 40, next: null } } }
10
20
30
40
linked list after insertion of new node in middle
10
20
50
30
40
linked list after delete middle node
10
20
30
40*/



