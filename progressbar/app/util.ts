export function getNewPercentValue(startingFrom): number {
    const newVal = Math.floor(Math.random() * 10) + startingFrom + 10;
    if (newVal > 100) {
        return 100;
    } else {
        return newVal;
    }
}
