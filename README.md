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

## Stack

A stack is a list of elements that are accessible only from the top, aka LIFO

### Usage

| name   |   type   | description                                     |
| :----- | :------: | :---------------------------------------------- |
| length | property | Get the number of elements in the stack         |
| empty  | property | Verify whether the stack has no elements        |
| peek   | function | Return the value stored at the top of the stack |
| push   | function | Add elements to the stack                       |
| pop    | function | Remove elements from the stack                  |
| clear  | function | Remove all elements from the stack              |

### Stack Class Implementation

Create Stack class implementation
