class Node{
    constructor(data){
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    getRoot = () => {
        return this.root;
    }

    insert = (data) => {
        let node = new Node(data);
        if(this.root === null){
            this.root = node;
        }else{
            this.insertNode(this.root, node);
        }
    }

    insertNode = (node, newNode) =>{
        if(node){
            if(node.data === newNode.data) return;

            if(newNode.data < node.data){
                if(node.left === null){
                    node.left = newNode
                    node = node.left;
                }else{
                    this.insertNode(node.left, newNode)
                }
            }else{
                if(node.right === null){
                    node.right = newNode;
                    node = node.right;
                }else{
                    this.insertNode(node.right, newNode);
                }
            }
        }
    }

    inorder(node){
        if(node !== null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder(node){
        if(node !== null){
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node){
        if(node !== null){
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

}

let t = new BST();

t.insert(20);
t.insert(10);
t.insert(8);
t.insert(22);
t.insert(23);
t.insert(22);
t.insert(40);
t.insert(9);
let tRoot = t.getRoot()

t.inorder(tRoot);
t.preorder(tRoot);
t.postorder(tRoot);