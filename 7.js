/**
 * 7. Reverse Integer
 * -------------------------------
 * Reverses the digits of an integer.
 * 
 */
function reverse(x) {
    // Initialize the result variable to store the reversed integer
    let ans = 0;

    // Continue the loop until the original integer becomes 0
    while (x !== 0) {
        // Extract the last digit of the integer
        let digit = x % 10;

        // Check for integer overflow before updating the result
        if (ans > (Math.pow(2, 31) - 1) / 10 || ans < Math.pow(-2, 31) / 10) {
            return 0;
        }

        // Update the result by appending the digit
        ans = ans * 10 + digit;

        // Remove the last digit from the original integer
        x = Math.floor(x / 10);
    }

    // Return the reversed integer
    return ans;
}

// Example usage:
const input = 123;
const reversed = reverse(input);
console.log(reversed);


/**
 * 
 * solution in C
 * ----------------------
 * 
 * int reverse(int x){
    int ans = 0;
    while (x != 0) {
      int dig = x % 10;
      if(ans>INT_MAX/10 || ans<INT_MIN/10) return 0;
      ans = ans * 10 + dig;
      x = x / 10;
    }
    return ans;
}
 */
