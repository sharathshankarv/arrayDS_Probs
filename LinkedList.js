function node(data){
    this.data = data;
    this.next = null;
}

function LinkedList(list){
    this.head = list || null;
}

LinkedList.prototype.insert = function(data){
    if(this.head === null)
    {this.head = new node(data);}
    else{
        let list = this.head;

        while(list.next){
            list = list.next;
        }

        list.next = new node(data);
    }
}

LinkedList.prototype.traverse = function(){
    if(this.head === null) return null;

    let list = this.head;
    while(list){
        console.log(`${list.data}`)
        if(list.next)
            console.log(` ->`)

        list = list.next
        
    }
}

let l = new LinkedList();
l.insert(10);
l.insert(20)
l.insert(3)
l.insert(2)
l.insert(1)
l.traverse()