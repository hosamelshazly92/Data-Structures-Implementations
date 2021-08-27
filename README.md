# Data Structures Implementations

JavaScript data structures implementations repository

## List ADT (Abstract Data Type)

A list is an ordered sequence of data

### Usage

| name       |   type   | description                                       |
| :--------- | :------: | :------------------------------------------------ |
| listSize   | property | Get the number of elements in the list            |
| pos        | property | Get the current position in the list              |
| length     | property | Return the number of elements in the list         |
| clear      | function | Clear all elements from the list                  |
| toString   | function | Return string representation of the list          |
| getElement | function | Return element at current position                |
| insert     | function | Insert new element after existing element         |
| append     | function | Add new element to the end of the list            |
| remove     | function | Remove element from the list                      |
| front      | function | Set current position to the first element         |
| end        | function | Set current position to the last element of list  |
| prev       | function | Move current position back one element            |
| next       | function | Move current position forward one element         |
| currPos    | function | Return the current position in the list           |
| moveTo     | function | Move the current position to a specified position |

### List Class Implementation

```javascript
let movies = new List();

movies.append("The Dark Knight");
movies.append("Star Wars");
movies.append("The Matrix");
movies.append("The Godfather");
movies.append("Fight Club");
movies.append("Inception");

console.log(movies.toString());
// output ["The Dark Knight", "Star Wars", "The Matrix", "The Godfather", "Fight Club", "Inception"]
```

Implement List class iterator

```javascript
// reset to first position in the list
movies.front();

for (let i = movies.currPos(); i < movies.length - 1; i++) {
    console.log(movies.getElement());
    movies.next();
}

// output The Dark Knight Star Wars The Matrix The Godfather Fight Club Inception
```

---

## Stack

A stack is a list of elements that are accessible only from the top, aka `LIFO`

### Usage

| name     |   type   | description                                     |
| :------- | :------: | :---------------------------------------------- |
| length   | property | Get the number of elements in the stack         |
| empty    | property | check whether the stack has no elements         |
| toString | function | Return string representation of the stack       |
| peek     | function | Return the value stored at the top of the stack |
| push     | function | Add elements to the stack                       |
| pop      | function | Remove elements from the stack                  |
| clear    | function | Remove all elements from the stack              |

### Stack Class Implementation

#### Multiple Base Conversions

Convert any given number between bases from 2 through 9 only

Performing Stack algorithm:

1. Push `num % base` to the stack
2. Number is updated to be `num / base` for the next iteration
3. Repeat steps 1 & 2 until `num = 0`
4. Final result is built from popping the stack

```javascript
function multipleBase(num, base) {
    let stack = new Stack();

    do {
        stack.push(num % base);
        num = Math.floor((num /= base));
    } while (num > 0);

    let result = "";

    while (stack.length > 0) {
        result += stack.pop();
    }

    return result;
}

console.log(multipleBase(32, 2));
// output 100000
```

#### Palindromes

Determine whether or not a given string is a palindrome

```javascript
function isPalindrome(word) {
    let stack = new Stack();

    for (let i = 0; i < word.length; i++) {
        stack.push(word[i]);
    }

    let rword = "";

    while (stack.length > 0) {
        rword += stack.pop();
    }

    if (word === rword) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("rotator"));
// output true
```

#### Recursion

Recursive definition of the factorial function

```javascript
function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));
// output 120
```

Simulating recursive processes using a stack

```javascript
function factorial(num) {
    let stack = new Stack();

    while (num > 1) {
        stack.push(num--);
    }

    let result = 1;

    while (stack.length > 0) {
        result *= stack.pop();
    }

    return result;
}

console.log(factorial(5));
// output 120
```

---

## Queue

A stack is used to store data in the order in which they occur as opposed to a stack, aka `FIFO`

### Usage

| name     |   type   | description                                      |
| :------- | :------: | :----------------------------------------------- |
| length   | property | Get the number of elements in the queue          |
| empty    | property | check whether the queue has no elements          |
| toString | function | Return string representation of the queue        |
| enqueue  | function | Add elements to the queue                        |
| dequeue  | function | Remove elements from the queue                   |
| clear    | function | Remove all elements from the queue               |
| front    | function | Set current position to the first element        |
| end      | function | Set current position to the last element of list |

### Queue Class Implementation

#### Sorting Data with Queues

Perform a radix sort

Algorithm impelementation:

-   Digit represent either 1s or 10s
-   Queues represent bins, total of 10 queues one for each digit
-   Determine 1 and 10 digits using modules and integer division operators
-   Collect numbers from the queues until queues are empty

```javascript
// an array of numbers not bigger than 100 and doesn't contain empty elements
let nums = [56, 10, 75, 6, 12, 29, 36, 49, 69, 75, 81, 95];

let queues = [];

for (let i = 0; i < 10; i++) {
    queues[i] = new Queue();
}

function distribute(nums, queues, digit) {
    for (let i = 0; i < 10; i++) {
        if (digit == 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        } else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    let i = 0;
    for (let digit = 0; digit < 10; digit++) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

distribute(nums, queues, 1);
collect(queues, nums);
distribute(nums, queues, 10);
collect(queues, nums);

console.log(nums);
// output [6, 10, 12, 29, 36, 49, 56, 69, 75, 75, 81, 95]
```

---

## Linked List

A linked list is a collection of objects called nodes connected with references called links

#### Object-Based Linked List Design

Linked list design involves creating two classes, a Node class for adding nodes and a LinkedList class for nodes insertion, deletion, etc.

### Usage

| name         |   type   | description                                  |
| :----------- | :------: | :------------------------------------------- |
| head         | property | The only property stored in the linked list  |
| display      | function | Return nodes in the linked list              |
| insert       | function | Insert a node to the linked list             |
| remove       | function | Remove a node from the linked list           |
| show         | function | Get the current node in the linked list      |
| advance      | function | Move to the next node in the linked list     |
| back         | function | Move to the previous node in the linked list |
| find         | utility  | Get a node in the linked list                |
| findPrevious | utility  | Get a previous node in the linked list       |

### Linked List Class Implementation

```javascript
let cities = new LinkedList();

cities.insert("A", "head");
cities.insert("B", "A");
cities.insert("C", "B");
cities.insert("Z", "C");
cities.insert("D", "Z");
cities.remove("Z");

cities.display();
// output
// A
// B
// C
// D
```

---

## Doubly Linked List

Doubly linked list simplifies the procedure of backward traversing by adding link to the previous node

### Usage

| name           |   type   | description                                        |
| :------------- | :------: | :------------------------------------------------- |
| head           | property | The only property stored in the doubly linked list |
| display        | function | Return nodes stored in the doubly linked list      |
| displayReverse | function | Return nodes in reverse order                      |
| insert         | function | Insert a node to the doubly linked list            |
| remove         | function | Remove a node from the doubly linked list          |
| findLast       | utility  | Get last node in the doubly linked list            |

### Doubly Linked List Class Implementation

```javascript
let cities = new DoublyLinkedList();

cities.insert("A", "head");
cities.insert("B", "A");
cities.insert("C", "B");
cities.insert("D", "C");

cities.displayReverse();
// output
// D
// C
// B
// A
```

---

## Dictionary

A dictionary stores data as key value pairs

### Usage

| name   |   type   | description                                  |
| :----- | :------: | :------------------------------------------- |
| add    | function | Insert new item into the dictionary          |
| find   | function | Get an item in the dictionary                |
| remove | function | Remove an item from the dictionary           |
| show   | function | Get all items in the dictionary              |
| sort   | function | Sort all items in the dictionary             |
| count  | function | Get the count of all items in the dictionary |
| clear  | function | Remove all items from the dictionary         |

### Dictionary Class Implementation

```javascript
let cars = new Dictionary();

cars.add("make", "BMW");
cars.add("model", "X6");
cars.add("year", "2021");
cars.add("color", "silver");

console.log(cars.show());
// output { make: 'BMW', model: 'X6', year: '2021', color: 'silver' }

console.log(cars.count());
// output 4
console.log(cars.sort());
// output { color: 'silver', make: 'BMW', model: 'X6', year: '2021' }
```

---

## Hash

Hashing uses a data structure called a hash table, to store a piece of data the key is mapped into a number in range from 0 through the hash table size using a hash function

#### Hashing Function

The hashing function computes a hash value through summing the ASCII value for each string

#### Collision

Avoid collision by setting the array size for the hash table to a prime number, e.g. 137, and multiplying the result of the sum of the ASCII values by a small prime number, e.g. 37

### Usage

| name       |   type   | description                |
| :--------- | :------: | :------------------------- |
| hashing    | utility  | Hash function definition   |
| put        | function | Insert data into the table |
| showDistro | function | Get all data in the table  |
| get        | function | Get an item in the table   |

### Hash Class Implementation

```javascript
let table = new Hash();

table.put("first", "red");
table.put("second", "green");
table.put("third", "blue");

table.showDistro();
// output
// red
// green
// blue

console.log(table.get("second"));
// output green
```

### Handling Collisions

#### Seperate Chaining

When two keys generate the same hash value, each key can be stored in a different position of another array

```javascript
// Hash class
class Hash {
    buildChains() {
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = new Array();
        }
    }
}
```

#### Linear Probing

When collision happens the new key is placed in the next empty element in the table

```javascript
// Hash class
class Hash {
    constructor() {
        this.values = [];
    }

    put(key, data) {
        let pos = this.hashing(key);
        if (this.table[pos] == undefined) {
            this.table[pos] = key;
            this.values[pos] = data;
        } else {
            while (this.table[pos] != undefined) {
                pos++;
            }
            this.table[pos] = key;
            this.values[pos] = data;
        }
        this.table[pos] = data;
    }
}
```

---

## Set

A set is an unordered collection of ununique members where no member occurs more than once

#### Set Definition

-   A set containing no members is called `empty set`
-   Two sets are equal if they contain exactly the same members
-   All members of a subset are included in the larger set

### Usage

| name       |   type   | description                                                         |
| :--------- | :------: | :------------------------------------------------------------------ |
| add        | function | Add new member to the list                                          |
| remove     | function | Remove a member from the set                                        |
| show       | function | Get all members in the set                                          |
| size       | function | Get the size of the set                                             |
| contains   | function | Check whether a member is in the set                                |
| union      | function | Get the union of two sets                                           |
| intersect  | function | Get the intersection of two sets                                    |
| subset     | function | Check whether the subset length is less than the larger set         |
| difference | function | Get a set containing members in the first set but not in the second |

### Set Class Implementation

```javascript
let primary = new Set();
primary.add("red");
primary.add("blue");

let secondary = new Set();
secondary.add("orange");
secondary.add("magenta");

console.log(primary.union(secondary));
// output [ 'red', 'blue', 'orange', 'magenta' ]
```

---

## Binary Search Tree

Tree is a nonlinear data structure used to store data in a hierarchical manner

-   Search very quickly as opposed to a linked list
-   Insert and delete data quickly as opposed to an array

#### Trees Definition

-   Tress are made up of a set of **_nodes_** connected by **_edges_**
-   The top node is called **_root node_**
-   The preceding node is called **_parent node_**, and the following one is a **_child node_**
-   A node without any children is called **_leaf node_**
-   The series of edges followed to get from one node to another is called a **_path_**
-   Visiting all nodes in some particular order is known as **_tree traversal_**
-   A tree is broken down into **_levels_**, the root node is at level 0, its children are at level 1, etc.
-   A node at any level is considered the root of a **_subtree_**
-   The **_tree_** depth can be defined by the number of levels in the tree
-   Each node in a tree has a value called **_key value_**

### Binary Tree

BT is a special type of trees that restrict the number of child nodes to only two nodes, where th child nodes are called left node and right node

```javascript
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = function () {
        return this.data;
    };
}
```

### Binary Search Tree Implementation

The first object to create is a Node object, then BST class consisting of this node object. There are three traversal functions used with BST: inorder, preorder and postorder:

-   `Inorder Traversal` visits all nodes in ascending order of the node values

```javascript
function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

var nums = new BST();

nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

inOrder(nums.root);
// output
// 3
// 16
// 22
// 23
// 37
// 45
// 99
```

-   `Preorder Traversal` visits the root node first, followed by the nodes in the subtrees under the left child of the root node, followed by the nodes in the subtrees under the right child of the root node

```javascript
function preOrder(node) {
    if (node !== null) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

var nums = new BST();

nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

preOrder(nums.root);
// output
// 23
// 16
// 3
// 22
// 45
// 37
// 99
```

-   `Postorder Traversal` visits all child nodes of the left subtree up to the root node, and then visits all child nodes of the right subtree up to the root node

```javascript
function postOrder(node) {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
    }
}

var nums = new BST();

nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

postOrder(nums.root);
// output
// 3
// 22
// 16
// 37
// 99
// 45
// 23
```

### Usage

| name       |   type   | description                      |
| :--------- | :------: | :------------------------------- |
| root       | property | The root node of the BST         |
| insert     | function | Add new node to the BST          |
| inOrder    | function | BST traversal function           |
| preOrder   | function | BST traversal function           |
| postOrder  | function | BST traversal function           |
| getMin     | function | Get the minimum value in the BST |
| getMax     | function | Get the maximum value in the BST |
| find       | function | Get a specific value in the BST  |
| remove     | function | Call removeNode function         |
| removeNode | function | Remove a node from the BST       |

Performing Insertion point algorithm:

1. Set the root node to be the current node
2. If the inserted data is less than current node data then the new current node is set to be the left child, but if it's greater than the current node then skip to step 4
3. If the left child of the current node is null then insert the new node here and exit the loop, otherwise, skip to the next iteration of the loop
4. Set the current node to be the right child of the current node
5. If the right child of the current node is null then insert the new node here and exit the loop, otherwise, skip to the next iteration of the loop

### BST Search

BST typically performs 3 type of searching:

1. Specific value
2. Minimum value
3. Maximum value

#### Search for the Minimum and Maximum Value

`getMin()` function travels down the left link of each node in the BST until it reaches the left end, whereas `getMax()` function must simply traverse the right links of nodes until the function reaches the right end of the BST

```javascript
class BST {
    getMin() {
        let currNode = this.root;
        while (currNode.left !== null) {
            currNode = currNode.left;
        }
        return currNode.data;
    }

    getMax() {
        let currNode = this.root;
        while (currNode.right !== null) {
            currNode = currNode.right;
        }
        return currNode.data;
    }
}
```

#### Search for a Specific Value

`find` function returns the current node if the value is found in the BST and returns null if not found

```javascript
class BST {
    find(data) {
        let currNode = this.root;
        while (currNode !== data) {
            if (data < currNode.data) {
                currNode = currNode.left;
            } else {
                currNode = currNode.right;
            }
            if (currNode == null) {
                return null;
            }
        }
        return currNode;
    }
}
```

#### Remove Nodes from a BST

The removal process contains two functions, `remove()` function that receives the value to be removed and calls the second function `removeNode()`

```javascript
class BST {
    remove(data) {
        root = removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node == null) {
            return null;
        }
        if (data == node.data) {
            // node has no children
            if (node.left == null && node.right == null) {
                return null;
            }
            // node has no left child
            if (node.left == null) {
                return node.right;
            }

            if (node.right == null) {
                return node.left;
            }

            let tempNode = getMin(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.left, data);
            return node;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }
}
```

---

## Graphs

The graph structure provides much more flexibility than a binary tree because there can be many edges linked to a single vertex

#### Graphs Definition

-   A graph consists of a set of **_vertices_** and a set of **_edges_**
-   A vertex can have a weight, which is sometimes called a **_cost_**
-   A graph whose pairs are ordered is called a **_directed_** graph, or just a **_digraph_**
-   When pairs are ordered in a directed graph an arrow is drawn from one pair to another pair
-   Directed graphs indicate the flow direction from vertex to vertex
-   If a graph is not ordered then it is called an **_unordered_** graph, or just a **_graph_**
-   A **_path_** is a sequence of vertices in a graph
-   The **_path length_** is the number of edges from the first vertex in the path to the last vertex
-   A path can also consist of a vertex to itself which is called a **_loop_**, loops have a length of 0
-   A **_cycle_** is a path with at least one edge whose first and last vertices are the same
-   A **_simple cycle_** is one with no repeated edges or vertices for both directed and undirected graphs
-   Paths that repeat other vertices besides the first and last vertices are called **_general_** cycles
-   Two vertices are considered strongly connected if there is a path from the first vertex to the second vertex and vice versa
-   If the graph is a directed graph and all its vertices are strongly connected, then the directed graph is considered strongly connected

### Vertices

The vertex class stores the vertices of a graph, it has two data members:

-   `Label` for identifying the vertex
-   `wasVisited` storing a Boolean value to indicate whether the vertex has been visited

```javascript
function Vertex(label = "vertex") {
    this.label = label;
}
```

### Edges

Edges describe the structure of a graph

-   The method used for representing the edges of a graph is called an `adjacency list`
-   Another method is called an `adjacency matrix`, this is a two-dimensional array in which the elements of the array indicate whether an edge exists between two vertices

```javascript
function Graph(vtx) {
    this.addEdge = function (a, b) {
        this.adj[a].push(b);
        this.adj[b].push(a);
        this.edges++;
    };
}
```

### Graph Class Implementation

```javascript
let graph = new Graph(4);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);

console.log(graph.show());
// output { '0': [ '1', '2' ], '1': [ '0', '3' ], '2': [ '0' ], '3': [ '1' ] }
```

### Graph Search

There are two fundamental searches that can be performed on a graph: `depth-first` search and `breadth-first` search

#### Depth-First Search (DFS)

Check all paths that can be followed in a graph

```javascript
function Graph(vtx) {
    this.dfs = function (vtx = 0) {
        this.marked[vtx] = true;

        for (let i in this.adj[vtx]) {
            if (!this.marked[i]) {
                this.dfs(i);
            }
        }
    };
}

let graph = new Graph(5);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

console.log(graph.dfs(0));
// output
// 0
// 1
// 3
// 2
// 4
```

#### Breadth-First Search (BFS)

BFS moves through a graph layer by layer, first examining layers closer to the first vertex and then moving down to the layers farthest away from the starting vertex

```javascript
function Graph(vtx) {
    this.bfs = function (start) {
        let queue = [];
        this.marked[start] = true;
        queue.push(start);

        while (queue.length > 0) {
            let vtx = queue.shift();

            for (let i of this.adj[vtx]) {
                if (!this.marked[i]) {
                    this.marked[i] = true;
                    queue.push(i);
                }
            }
        }
    };
}

let graph = new Graph(5);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

console.log(graph.bfs(0));
// output
// 0
// 1
// 3
// 2
// 4
```

### Find The Shortest Path

Modify the breadth-first search algorithm so that it records the paths that lead from one vertex to another vertex, This requires a few modifications to the Graph class:

-   First, an array that keeps track of edges from one vertex to the next `edgeTo`

```javascript
function Graph(vtx) {
    this.edgeTo = [];

    this.bfs = function (start) {
        let queue = [];
        this.marked[start] = true;
        queue.push(start);

        while (queue.length > 0) {
            let vtx = queue.shift();

            for (let i of this.adj[vtx]) {
                if (!this.marked[i]) {
                    this.edgeTo[i] = vtx;
                    this.marked[i] = true;
                    queue.push(i);
                }
            }
        }
    };
}
```

-   A function that shows the paths that connect different vertices of a graph `pathTo()`

```javascript
function Graph(vtx) {
    this.pathTo = function (vtx) {
        let src = 0;

        if (!this.hasPathTo(vtx)) {
            return undefined;
        }

        let path = [];

        for (let i = vtx; i != src; i = this.edgeTo[i]) {
            path.push(i);
        }

        path.push(src);

        return path;
    };

    this.hasPathTo = function (vtx) {
        return this.marked[vtx];
    };
}
```

---

# Sorting Algorithms

The technique used to rearrange data in a list is a set of nested for loops, where the outer loop moves through the list item by item while the inner loop is used to compare elements

## Bubble Sort

The bubble sort algorithm works by swapping adjacent elements placed in wrong order, it's one of the slowest sorting algorithms but it is also one of the easiest sorts to implement

#### Bubble Sort Implementation

```javascript
class Arr {
    bubbleSort() {
        let num = this.dataStore.length;

        for (let outer = num; outer >= 2; outer--) {
            for (let inner = 0; inner <= outer - 1; inner++) {
                if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                    this.swap(inner, inner + 1);
                }
            }
        }

        return this.dataStore;
    }
}

let nums = new Arr(5);
nums.setData();
console.log(nums.setData() + " => Array");
// output 1,5,5,3,3 => Array

console.log(nums.bubbleSort() + " => Bubble Sort");
// output 1,3,3,5,5 => Bubble Sort
```

## Selection Sort

The outer loop moves from the first element to the last element where the inner loop moves from the second element to the last element looking for values that are smaller than the element currently being pointed to by the outer loop, then the smallest value in the array is assigned its proper place in the array

#### Selection Sort Implementation

```javascript
class Arr {
    selectionSort() {
        let min;

        for (let outer = 0; outer <= this.dataStore.length - 2; outer++) {
            min = outer;

            for (
                let inner = outer + 1;
                inner <= this.dataStore.length - 1;
                inner++
            ) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }

                this.swap(outer, min);
            }
        }

        return this.dataStore;
    }
}
```

```javascript
let nums = new Arr(5);
nums.setData();
console.log(nums.setData() + " => Array");
// output 5,2,0,2,1 => Array

console.log(nums.selectionSort() + " => Selection Sort");
// output 0,1,2,2,5 => Selection Sort
```

## Insertion Sort

The outer loop moves element by element through the array while the inner loop compares the element chosen in the outer loop to the element next to it in the array, if the element selected by the outer loop is less than the element selected by the inner loop then array elements are shifted over to the right to make room for the inner loop element

#### Insertion Sort Implementation

```javascript
class Arr {
    insertionSort() {
        let inner, temp;

        for (let outer = 0; outer < this.dataStore.length; outer++) {
            temp = this.dataStore[outer];
            inner = outer;

            while (inner > 0 && this.dataStore[inner - 1] >= temp) {
                this.dataStore[inner] = this.dataStore[inner - 1];
                inner--;
            }

            this.dataStore[inner] = temp;
        }

        return this.dataStore;
    }
}

let nums = new Arr(5);
nums.setData();
console.log(nums.setData() + " => Array");
// output 5,4,0,4,0 => Array

console.log(nums.insertionSort() + " => Insertion Sort");
// output 0,0,4,4,5 => Insertion Sort
```

## Shell Sort

The shell sort algorithm is based on the insertion sort, the key concept is that it compares distant elements first rather than adjacent elements as is done in the insertion sort

#### Shell Sort Implementation

```javascript
class Arr {
    shellSort() {
        let n = this.dataStore.length;
        let h = 1;

        while (h < n / 3) {
            h = 3 * h + 1;
        }

        while (h >= 1) {
            for (let i = h; i < n; i++) {
                for (
                    let j = i;
                    j >= h && this.dataStore[j] < this.dataStore[j - h];
                    j -= h
                ) {
                    this.swap(j, j - h);
                }
            }

            h = (h - 1) / 3;
        }

        return this.dataStore;
    }
}

let nums = new Arr(5);
nums.setData();
console.log(nums.setData() + " => Array");
// output 0,2,3,1,1 => Array

console.log(nums.shellSort() + " => Shell Sort");
// output 0,1,1,2,3 => Shell Sort
```

## Merge Sort

The Mergesort algorithm works by merging sorted sublists together to form a larger sorted list

-   `Top-Bottom Merge Sort` the recursive version of the merge sort algorithm
-   `Bottom-Up Merge Sort` the non recursive, or iterative, version of the merge sort algorithm

#### Bottom-Up Merge Sort

This algorithm begins by breaking down the data set into a set of one element arrays, then these arrays are merged by creating a set of left and right subarrays

#### Merge Sort Implementation

```javascript
class Arr {
    mergeSort() {
        if (this.dataStore.length < 2) {
            return;
        }

        let step = 1;
        let left, right;

        while (step < this.dataStore.length) {
            left = 0;
            right = step;

            while (right + step <= this.dataStore.length) {
                this.mergeArr(left, left + step, right, right + step);
                left = right + step;
                right = left + step;
            }

            if (right < this.dataStore.length) {
                this.mergeArr(left, left + step, right, this.dataStore.length);
            }

            step *= 2;
        }

        return this.dataStore;
    }

    mergeArr(sLeft, eLeft, sRight, eRight) {
        let k;
        let leftArr = new Array(eLeft - sLeft + 1);
        let rightArr = new Array(eRight - sRight + 1);
        k = sRight;

        for (let i = 0; i < rightArr.length - 1; i++) {
            rightArr[i] = this.dataStore[k];
            k++;
        }

        k = sLeft;

        for (let i = 0; i < leftArr.length - 1; i++) {
            leftArr[i] = this.dataStore[k];
            k++;
        }

        rightArr[rightArr.length - 1] = Infinity;
        leftArr[leftArr.length - 1] = Infinity;

        let m = 0;
        let n = 0;

        for (let k = sLeft; k < eRight; k++) {
            if (leftArr[m] <= rightArr[n]) {
                this.dataStore[k] = leftArr[m];
                m++;
            } else {
                this.dataStore[k] = rightArr[n];
                n++;
            }
        }
    }
}

let nums = new Arr(5);
nums.setData();
console.log(nums.setData() + " => Array");
// output 4,0,3,1,2 => Array

console.log(nums.mergeSort() + " => Merge Sort");
// output 0,1,2,3,4 => Merge Sort
```

## Quick Sort

Quicksort is a divide and conquer algorithm that recursively breaks a list of data into smaller sublists consisting of smaller and larger elements, it's one of the fastest sorting algorithms for large data sets

Performing Quicksort algorithm:

1. Picking a pivot element that divides the list into two sublists
2. Reordering the list so that all elements less than the pivot element are placed before the pivot and all elements greater than the pivot are placed after it
3. Repeating steps 1 & 2 on both the list with smaller and larger elements

#### Quick Sort Implementation

```javascript
class Arr {
    quickSort() {
        if (this.dataStore.length == 0) {
            return [];
        }

        let lesser = [];
        let greater = [];
        let pivot = this.dataStore[0];

        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] < pivot) {
                lesser.push(this.dataStore[i]);
            } else {
                greater.push(this.dataStore[i]);
            }
        }

        return lesser.concat(greater);
    }
}

let nums = new Arr(5);
nums.setData();
console.log(nums.setData() + " => Array");
// output 5,0,2,2,4 => Array

console.log(nums.quickSort() + " => Quick Sort");
// output 0,2,2,4,5 => Quick Sort
```

---

# Searching Algorithms

There are two ways to search for data in a list:

-   Sequential Search, used when the items in a list are in random order

-   Binary Search, used when the items in a list are in sorted order

Binary search is more efficient although it takes extra time to sort the data set before searching for a value

## Sequential Search

Begining at the first element and moving to each element until reaching the end of the list, also called **_linear search_**

#### Sequential Search Implementation

```javascript
function seqSearch(arr, data) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == data) {
            return arr.indexOf(data);
        }
    }

    return -1;
}

let arr = [32, 1, 51, 18, 101, 94];

console.log(seqSearch(arr, 11));
// output -1

console.log(seqSearch(arr, 18));
// output 3
```

### Searching for Minimum and Maximum Values

Performing Searching algorithm:

1. Assigning the first element to a variable as the minimum value
2. Looping through the array to compare each element with the current minimum value
3. Assigning the current element as the new minimum value if the current element has a lesser value than the current minimum value
4. Moving to the next element and repeating step 3
5. The minimum value is stored in the variable when the program ends

#### Sequential Search Implementation

```javascript
function findMin(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

let arr = [32, 1, 51, 18, 101, 94];

console.log(findMin(arr));
// output 1

console.log(findMax(arr));
// output 101
```

## Binary Search

When data is sorted a more efficient search than the sequential search is the binary search

Performing Binary search algorithm:

1. Setting a lower bound to the first position of the array (0)
2. Setting an upper bound to the last element of the array (array length - 1)
3. While the lower bound is less than or equal to the upper bound:
   a. Setting the midpoint as **_(upper bound - lower bound) / 2_**
   b. If the midpoint element is less than the data being searched for, setting a new lower bound to the **_midpoint + 1_**
   c. If the midpoint element is greater than the data being searched for, setting a new upper bound to the **_midpoint - 1_**
   d. Otherwise the midpoint is returned as the found element

#### Binary Search Implementation

```javascript
function binSearch(arr, data) {
    let lower = 0;
    let upper = arr.length - 1;

    while (lower <= upper) {
        let mid = Math.floor((upper + lower) / 2);

        if (arr[mid] < data) {
            lower = mid + 1;
        } else if (arr[mid] > data) {
            upper = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}

let arr = [32, 1, 51, 18, 101, 94];

console.log(binSearch(arr, 51));
// output 2
```

---

# Advanced Algorithms

-   `Dynamic Programming` starts at the bottom solving small problems and combining them to form an overall solution to the big problem, as opposed to recursion

-   `Greedy Algorithm` looks for good solutions as it works toward the complete solution, these good solutions called **_local optima_** leads to the correct final solution called the **_global optimum_**

## Dynamic Programming

Dynamic programming is an efficient solution that builds a table usually using an array to hold the results of the many subsolutions, whereas recursive solutions to problems are inefficient

-   A dynamic programming algorithm starts by solving the simplest subproblem, then using that solution to solve more complex subproblems until the entire problem is solved
-   The solutions to each subproblem are typically stored in an array for easy access

#### Recursive Fibonacci Sequence

```javascript
function fib(num) {
    if (num < 2) {
        return num;
    } else {
        return fib(num - 1) + fib(num - 2);
    }
}

console.log(fib(8));
// output 21
```

#### Dynamic Programming Fibonacci Sequence

```javascript
function fib(num) {
    // array for storing results
    let val = [];

    for (let i = 0; i <= num; i++) {
        val[i] = 0;
    }

    if (num == 1 || num == 2) {
        return 1;
    } else {
        val[1] = 1;
        val[2] = 2;

        for (let i = 3; i <= num; i++) {
            val[i] = val[i - 1] + val[i - 2];
        }

        return val[num - 1];
    }
}

console.log(fib(8));
// output 21
```

#### Recursive Knapsack

```javascript
function max(a, b) {
    return a > b ? a : b;
}

function knapsack(capacity, size, val, num) {
    if (num == 0 || capacity == 0) {
        return 0;
    }

    if (size[num - 1] > capacity) {
        return knapsack(capacity, size, val, num - 1);
    } else {
        return max(
            val[num - 1] +
                knapsack(capacity - size[num - 1], size, val, num - 1),
            knapsack(capacity, size, val, num - 1)
        );
    }
}

let size = [3, 4, 7, 8, 9];
let val = [4, 5, 10, 11, 13];

console.log(knapsack(16, size, val, 5));
// output 23
```

#### Dynamic Programming Knapsack

```javascript
function max(a, b) {
    return a > b ? a : b;
}

function knapsack(capacity, size, val, num) {
    let k = [];

    for (let i = 0; i <= capacity + 1; i++) {
        k[i] = [];
    }

    for (let i = 0; i <= num; i++) {
        for (let j = 0; j <= capacity; j++) {
            if (i == 0 || j == 0) {
                k[i][j] = 0;
            } else if (size[i - 1] <= j) {
                k[i][j] = max(
                    val[i - 1] + k[i - 1][j - size[i - 1]],
                    k[i - 1][j]
                );
            } else {
                k[i][j] = k[i - 1][j];
            }
        }
    }

    return k[num][capacity];
}

let size = [3, 4, 7, 8, 9];
let val = [4, 5, 10, 11, 13];

console.log(knapsack(16, size, val, 5));
// output 23
```

## Greedy Algorithms

A greedy algorithm is one that always chooses the best solution at the time, with no regard to how that choice will affect future

#### Greedy Algorithm Knapsack

Performing fractional knapsack greedy algorithm:

1. Knapsack has a capacity W and items have values V and weights w
2. Ranking items by v/w ratio
3. Considering items in terms of decreasing ratio
4. Taking as much of each item as possible

```javascript
function knapsack(values, weights, capacity) {
    let load = 0;
    let i = 0;
    let w = 0;

    while (load < capacity && i < 4) {
        if (weights[i] <= capacity - load) {
            w += values[i];
            load += weights[i];
        } else {
            let r = (capacity - load) / weights[i];
            w += r * values[i];
            load += weights[i];
        }
        i++;
    }

    return w;
}

var values = [50, 140, 60, 60];
var weights = [5, 20, 10, 12];

console.log(knapsack(values, weights, 30));
// output 220
```
