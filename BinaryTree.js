function Node(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    this.root = null;
}

BinarySearchTree.prototype.addNode = addNode;
BinarySearchTree.prototype.insertNode = insertNode;
BinarySearchTree.prototype.inOrder = inOrder; 


function addNode(data){
    let newNode = new Node(data);
    if(!this.root)
        this.root = newNode;
    else
        this.insertNode(newNode);
}

function insertNode(newNode){
    let value = newNode.data;
    let traverse = function(node) {
        if (value === node.data) {
            return;
        } else if (value > node.data) {
            if (!node.right) {
                node.right = newNode;
                return;
            } else
                traverse(node.right);
        } else if (value < node.data) {
            if (!node.left) {
                node.left = newNode;
                return;
            } else
                traverse(node.left);
        }
    };
    traverse(this.root);
}

function inOrder(node){
    if(node)
    {
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }
}

let t = new BinarySearchTree();
t.addNode(20);
t.addNode(10);
t.addNode(8);
t.addNode(22);
t.addNode(23);
t.addNode(22);
t.addNode(40);
t.addNode(9);
t.inOrder(t.root);


