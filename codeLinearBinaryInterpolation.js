// Линейный поиск
function LinearSearch(t,A)      // t - искомый элемент,
{                               // A - массив, в котором ищем.
    var n = A.length, i = 0;   
    
    A[n] = t;
    
    while (A[ i ] !== t) i++;
                                
    if (i < n){
        console.log(i) 
        return i;    // На выходе индекс искомого элемента.
    }          
    else{
        console.log(-1)
        return -1;     // Если искомого элемента нет в массиве, то -1.
    }           
}
// Бинарный (двоичный) поиск
function BinarySearch(t,A)         // t - искомый элемент,
{                                  // A - упорядоченный массив, в котором ищем.
    var i = 0, j = A.length-1, k;   

    while (i <= j)
    {  k = Math.floor((i+j)/2);
       if (t === A[k]) return k;
       else if (t < A[k]) j = k-1;
       else i = k+1;
    }
                                   // На выходе индекс искомого элемента.
    return -1;                     // Если искомого элемента нет в массиве, то -1.
}
// -------------Оптимизированный вариант------------------
function BinarySearch(t,A)       // t - искомый элемент,
{                                // A - упорядоченный массив, в котором ищем.
    var i = 0, j = A.length, k; 
                                 
    while (i < j)                
    {  k = Math.floor((i+j)/2);
       if (t <= A[k]) j = k;
       else i = k+1;
    }
   
    if (A[ i ] === t) return i;     // На выходе индекс искомого элемента.
    else return -1;                 // Если искомого элемента нет в массиве, то -1.
}
// Интерполирующий поиск
function InterpolationSearch(t,A)          // t - искомый элемент,
{                                          // A - упорядоченный массив, в котором ищем.
    var mid, low = 0, high = A.length-1;

    while (A[low] < t && A[high] > t)
    {  mid = low + Math.floor( ((t-A[low])*(high-low))/(A[high]-A[low]) );
       if (A[mid] < t) low = mid+1;
       else if (A[mid] > t) high = mid-1;
       else return mid;
    }

    if (A[low] === t) return low;           // На выходе индекс искомого элемента.
    else if (A[high] === t) return high;    // Если искомого элемента нет в массиве, то -1.
    else return -1;
}