/*

[
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]

*/
const spiral = (n) => {
  let results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let startColumn = 0, startRow = 0,
      endColumn = n - 1, endRow = n - 1;

  let counter = 0, i;

  while (startColumn <= endColumn && startRow <= endRow) {

    for (i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = ++counter;
    }

    startRow++;

    for (i = startRow; i <= endRow; i++) {
      results[i][endColumn] = ++counter;
    }

    endColumn--;


    for (i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = ++counter;
    }

    endRow--;

    for (i = endRow; i >= startRow; i--) {
      results[i][startColumn] = ++counter;
    }

    startColumn++;

  }

  return results;

};
