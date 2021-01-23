function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;  
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }

  // Only change code above this line
} 

// Clarification
// what happens for sum([2, 3, 4], 1)
/** 
 * check if (n <= 0) --> false
 * go to else 
 * return sum(arr, n - 1) --> 0
 *    + arr[n - 1] --> 2
 *      0 + 2 = 2
 * **/
// Clarification
// what happens for sum([2, 3, 4, 5], 3)
/** 
 * (##iter 1##):
 * check if (n <= 0) --> (3) false
 * go to else
 * return sum(arr, n - 1)
 *       (##iter 2##):
 *       check if (n <= 0) (2) --> false
 *       go to else
 *       return sum(arr, n - 1)
 *          (##iter 3##):
 *          check if (n <= 0) (1) --> false
 *          go to else
 *          return sum(arr, n - 1)
 *              (##iter 4##):
 *              check if (n <= 0) (0) --> true
 *              --> return 0 
 *          --> arr[n - 1] = 2  --> 0 + 2 = 2
 *       --> arr[n - 1] = 3     --> 2 + 3 = 5
 * --> arr[n - 1] = 4           --> 5 + 4 = 9
 */