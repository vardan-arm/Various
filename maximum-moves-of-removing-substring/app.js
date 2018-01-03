// Given a string we need to delete the either first occurence or last occurence of substring.
// We should find maximum number of moves for given s and t.
// Inputs only contain lowercase alphabetic letters [a-z].
// For example, if s="abcsbcr" and t="bc", the result will be 2.
// If s="abcde" and t="f", the result will be 0.

'use strict'

function maxMoves(s, t) {
    let movesCount = 0;
    while(s.includes(t)) {
        // s = s.replace(t, '');
        let pos = s.indexOf(t);
        if(pos === 0) {
            pos = s.lastIndexOf(t);
        }
        s = s.substring(0, pos) + s.substring(pos + t.length);
        movesCount++;
    }
    return movesCount;
}
// Edge case:   maxMoves('ababaa', 'aba')

let res = maxMoves('ababaa', 'aba');
console.log(res);
