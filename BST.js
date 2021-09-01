class Node{
    constructor(data) {

        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {    
        // Creating a node and initailising 
        // with data
        var newNode = new Node(data);
        // root is null then node will
        // be added to the tree and made root.
        if(this.root === null)
        this.root = newNode;
        else
        // find the correct position in the 
        // tree and add the node
        this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        // if the data is less than the node
        // data move left of the tree 
        if(newNode.data < node.data) {
            // if left is null insert node here
            if(node.left === null)
                node.left = newNode;
            else
                // if left is not null recursion until 
                // null is found
                this.insertNode(node.left, newNode);
        } else {
            // if right is null insert node here
            if(node.right === null)
                node.right = newNode;
            else
                // if right is not null recur until 
                // null is found
                this.insertNode(node.right, newNode);
        }
    }

    // Performs inorder traversal of a tree
    inorder(node) {
        if(node !== null) {
		    this.inorder(node.left);
		    console.log(node.data);
		    this.inorder(node.right);
	    }
    }

    // Performs preorder traversal of a tree	
    preorder(node) {
	    if(node !== null) {
		    console.log(node.data);
		    this.preorder(node.left);
		    this.preorder(node.right);
	    }
    }

    // Performs postorder traversal of a tree
    postorder(node) {
        if(node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    // returns root of the tree
    getRootNode() {
        return this.root;
    }
}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

var root = BST.getRootNode();

console.log("inorder traversal");
BST.inorder(root);

console.log("postorder traversal");
BST.postorder(root);

console.log("preorder traversal");
BST.preorder(root);
