//  2810. Faulty Keyboard

function finalString(s: string): string {
    // Initialize an empty string to store the final result
    let k = '';

    for (let i = 0; i < s.length; i++) {
        // Check if the current character is not equal to 'i'
        if (s[i] !== 'i') {
            // Append the current character to the result string 'k'
            k += s[i];
        } else {
            // If the current character is 'i', reverse the characters in 'k'
            k = k.split('').reverse().join('');
        }
    }

    return k;
}