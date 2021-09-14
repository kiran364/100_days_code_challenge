// Javascript Function to print leaders in an array
// A[] = {16,17,4,3,5,2}
// Output: 17 5 2
// Explanation: The first leader is 17 
// as it is greater than all the elements
// to its right.  Similarly, the next 
// leader is 5. The right most element 
// is always a leader so it is also 
// included.
 
function printLeaders( arr, size)
{
    for (let i = 0; i < size; i++)
    {
        let j;
        for (j = i+1; j < size; j++)
        {
            if (arr[i] <=arr[j])
                break;
        }
        if (j == size) // the loop didn't break
            console.log(arr[i], "");
  }
}

// driver code
let arr = [ 16, 17, 4, 3, 5, 2 ];
let n = arr.length;
 
// Function calling
printLeaders(arr, n);