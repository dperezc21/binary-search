# binary-search-library  


#### implementing binary search without use recursive function to find the index of a number list sorted
#### the algorithm work using the indices start and final of list, get the middle index between both  
``` 
const middleIndex = (firstIndex + lastIndex) / 2; 
```  
#### and then try find with the middle index using the list if matches with number to search
#### if is greater than the number. gets new indices. reducing the search range of number list in half

```
import binarySearch from 'binary-search-2';
```

```
const index: number = binarySearch.bs([1,2,3,4,5,6], 5);
```

#### this function will return -1 if the number is not in the list 
