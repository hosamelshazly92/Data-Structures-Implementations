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

Create List class implementation

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

Create Stack class implementation

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

### Recursion

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
