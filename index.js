// Helper function to find the maximum number in an array
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Main code to use the helper function
  const numbers = [10, 5, 20, 15, 8]; // You can change the array elements
  const maxNumber = findMax(numbers);
  console.log(`The maximum number in the array is: ${maxNumber}`);
  