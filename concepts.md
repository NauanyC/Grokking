## Running time:

1. Linear time: means one for each item. In a list of 4 bilion people, linear time means searching up to 4 bilion times.
    * Represented as: O(n)
2. Logatithmic time: is the time that binary search takes, for it it's number of steps is log2 of the list size.
    * Represented as: O(Log n)

## Big O Notation

Run time is expressed with a big O in the beggining, that is why it's called bigO notation, examples from **fastest to slower**:
    * O(Log n)
    * O(n)
    * O(nLogn)
    * O(n²)
    * O(n!)

Algorithm speed is not measured in seconds, but in number of operations. The important metric os how fast the runtime of the algorithm increases as the size of the input increases.

## Linked lists vs Arrays

=> **Linked lists** are good for sequential read and for write. You just store your element in a free memory address and store with it the position of the next element in the list.
    * Only allow sequential access.
=> **Arrays** are good for when you need to randomly read elements, for you'll know the position of every element. 
    * Array elements positions are called index.
    * Allow sequencial and random access (to access specific index without accessing previous ones). 

### Run time
    * Array:
        * Insertion: O(n)
        * Read:      O(1)
        * Deletion:  O(n)
    * Linked list:
        * Insertion: O(1)
        * Read:      O(n)
        * Read:      O(1)

## Recursion
*"Loops may achieve a performance gain for your program. Recursion may achieve a performance gain for your programmer."*

A recursive function has two cases:
    * Base case: desired goal, when recursion stops.
    * Recursive case: when the function calls itself.

## The callstack

Like a block of sticky notes; it has two operations: 
    * Push: add an item to the top of the stack.
    * Pop: remove an item from the top of the stack.


