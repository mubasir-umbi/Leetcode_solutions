
//  problem number 1657. Determine if Two Strings Are Close


// solution 

function closeStrings(word1: string, word2: string): boolean {
    // Check if the lengths of both words are different
    if (word1.length !== word2.length) return false;

    // Initialize frequency maps for each character in both words
    const memo1: Record<string, number> = {};
    const memo2: Record<string, number> = {};
    let i = 0;

    // Populate the frequency maps while iterating through word1 and word2
    while (i < word1.length) {
        // Update frequency for characters in word1
        memo1[word1[i]] = (memo1[word1[i]] || 0) + 1;
        // Update frequency for characters in word2
        memo2[word2[i]] = (memo2[word2[i]] || 0) + 1;
        i++;
    }

    // Extract unique characters from both words and sort them
    const chars1 = Object.keys(memo1).sort();
    const chars2 = Object.keys(memo2).sort();

    // Check if the sets of unique characters are the same
    if (chars1.join('') !== chars2.join('')) return false;

    // Extract frequency counts for each character and sort them
    const counts1 = Object.values(memo1).sort((a: number, b: number) => a - b);
    const counts2 = Object.values(memo2).sort((a: number, b: number) => a - b);

    // Check if the sorted frequency counts are the same
    return JSON.stringify(counts1) === JSON.stringify(counts2);
};




/*
Explanation
---------------------

This TypeScript solution aims to determine whether two given strings can be considered "close" based on the defined operations. 
The operations include swapping any two existing characters and transforming occurrences of one character into another. 
The function meticulously counts character occurrences in both strings, compares character sets, 
and ensures that the counts of occurrences are equivalent.

*/