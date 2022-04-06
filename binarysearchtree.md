# PROJE-3

## [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

                       7
                      / \
                     5   8
                    / \   \
                    1  6   9
                   / \
                   0  3
                      /\
                      2 4

> #### Explanation:
> - For binary search to work, the elements in the array must already be
> ordered.
> - Without loss of generality, assume that the array is in ascending order.
> e.g., 2 4 7 10 11 45 50 59 60 66 69 70 79
> - The binary search first compares the key with the element in the
> middle of the array.


```java

private static int binarySearch (int [] list , int key ) {
       int low = 0;
       int high = list . length - 1;

       while ( high >= low ) {
              int mid = ( low + high ) / 2;
              if ( key < list [ mid ]) {
                    high = mid - 1;
              } else if ( key == list [ mid ]){
                    return mid ;
              } else
                    low = mid + 1;
       }
         return -1 - low ;
      }

```
