# Data-Structures-Implementations

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

The performing algorithm:

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
// output [6, 10, 12, 29, 36, 49, 56, 69, 75, 75, 81, 95];
```

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
    ...
    buildChains() {
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = new Array();
        }
    }
    ...
}
```

#### Linear Probing

When collision happens the new key is placed in the next empty element in the table

```javascript
// Hash class
class Hash {
    ...
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
    ...
}
```
