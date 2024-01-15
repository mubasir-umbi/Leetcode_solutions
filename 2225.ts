function findWinners(matches: number[][]): [number[], number[]] {
    const winnersSet = new Set<number>();
    const losersCount = new Map<number, number>();

    for (const match of matches) {
        const [winner, loser] = match;
        winnersSet.add(winner);
        losersCount.set(loser, (losersCount.get(loser) || 0) + 1);
    };

    const allWinners: number[] = [...winnersSet].filter(winner => !losersCount.has(winner));
    const oneLosers: number[] = [];

    for (const loser of losersCount.keys()) {
        if (losersCount.get(loser) === 1)  oneLosers.push(loser)
    }
    return [allWinners.sort((a, b) => a - b), oneLosers.sort((a, b) => a - b)];
}

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))


/*

-----Explanation-----


Intuition
-----------------

The problem seems to involve processing a list of match results to determine the winners and losers. 
We can use a set to keep track of unique winners and a map to count the number of times each player loses. 
By analyzing these data structures, we can identify the final winners and players who lost only once.

Approach
------------------


->  Initialize a set (winnersSet) to store unique winners and a map (losersCount) to count the number of times each player loses.
->  Iterate through the given matches array to update the set and map.
->  After processing all matches, filter the players in the winnersSet who never lost (have no entries in losersCount). This will give us the final winners.
->  Iterate through the keys of losersCount to find players who lost only once and add them to a separate array (oneLosers).
->  Return the sorted arrays of final winners and players who lost only once.


Complexity
----------------

Time complexity:
O(n log n) due to the sorting of arrays.

Space complexity:
O(n) where n is the number of unique players.

*/