/**
 * Find the first string in an array of strings whose first
 * letter is equal to the `letter` parameter, starting the search
 * from the `startIndex` parameter.
 *
 * @returns - The index of the first item starting with `letter`
 * or undefined if there isn't one.
 */
export default function findItemIndexWithLetter(
    strings: Array<string>,
    startIndex: number,
    letter: string,
) {
    let nextIndex: number | undefined = undefined;
    for (let i = startIndex; i < strings.length; i++) {
        if (strings[i].toLowerCase().startsWith(letter.toLowerCase())) {
            nextIndex = i;
            break;
        }
    }
    return nextIndex;
}
