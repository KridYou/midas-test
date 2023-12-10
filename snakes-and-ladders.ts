function quickestPath(board: {
  ladders: [number, number][];
  snakes: [number, number][];
}): number[] {
  let ans: number[] = [];
  let position: number = 1;
  let diff: number = 0;

  for (let i = 0; i < board.ladders.length; i++) {
    if (board.ladders[i][0] < position) {
      continue;
    }
    for (let j = 0; j < board.snakes.length; j++) {
      if (
        i !== board.ladders.length - 1 &&
        (board.snakes[j][0] < position || board.ladders[i][0] < position)
      ) {
        continue;
      }

      if (
        position < board.ladders[i][0] &&
        board.ladders[i][0] < board.snakes[j][0]
      ) {
        diff = board.ladders[i][0] - position;
        while (diff > 6) {
          ans.push(6);
          diff -= 6;
        }
        ans.push(diff);

        position = board.ladders[i][1];
        continue;
      } else if (
        position < board.snakes[j][0] &&
        board.ladders[i][0] > board.snakes[j][0]
      ) {
        diff = board.ladders[i][0] - position;

        while (diff > 6) {
          if (position + 6 === board.snakes[j][0]) {
            ans.push(5);
            position += 5;
            diff -= 5;
          } else {
            ans.push(6);
            position += 6;
            diff -= 5;
          }
        }
        ans.push(diff);
        position = board.ladders[i][1];
      } else if (
        position < board.snakes[j][0] &&
        board.snakes[j][0] > board.ladders[i][0]
      ) {
        diff = 100 - position;
        while (diff > 6) {
          if (position + 6 === board.snakes[j][0]) {
            ans.push(5);

            diff -= 5;
            position += 5;
          } else {
            ans.push(6);

            diff -= 6;
            position += 6;
          }
        }

        ans.push(diff);
        position += diff;
      }
    }
  }
  // console.log("ans", ans);
  return ans;
}

quickestPath({
  ladders: [
    [3, 39],
    [14, 35],
    [31, 70],
    [44, 65],
    [47, 86],
    [63, 83],
    [71, 90],
  ],
  snakes: [
    [21, 4],
    [30, 8],
    [55, 38],
    [79, 42],
    [87, 54],
    [91, 48],
    [99, 66],
  ],
});
