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