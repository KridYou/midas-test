function quickestPath(board: {
  ladders: [number, number][];
  snakes: [number, number][];
}): number[] {
  let ans: number[] = [];
  let position: number = 1;
  let diff: number = 0;

  let end: number = 100;
  console.log("---start---");
  console.log("ans", ans, "position", position);

  for (let i = 0; i < board.ladders.length; i++) {
    if (board.ladders[i][0] < position) {
      continue;
    }
    for (let j = 0; j < board.snakes.length; j++) {
      if (board.snakes[j][0] < position) {
        continue;
      }
      console.log("ladder", board.ladders[i][0]);
      console.log("snake", board.snakes[j][0]);

      if (
        position < board.ladders[i][0] &&
        board.ladders[i][0] < board.snakes[j][0]
      ) {
        console.log("ladder occur b4 snake");
        diff = board.ladders[i][0] - position;
        console.log("diff", diff);
        while (diff > 6) {
          ans.push(6);
          diff -= 6;
          console.log("diff", diff);
        }
        ans.push(diff);

        position = board.ladders[i][1];
        console.log("ans", ans);
        console.log("position", position);
        console.log("---end---");
        break;
      } else if (
        position < board.snakes[j][0] &&
        board.ladders[i][0] > board.snakes[j][0]
      ) {
        console.log("snake  occur b4 ladder");

        diff = board.ladders[i][0] - position;

        while (diff > 6) {
          console.log("ladder", board.ladders[i][0]);
          console.log("snake", board.snakes[j][0]);
          if (position + 6 === board.snakes[j][0]) {
            ans.push(5);
            position += 5;
            diff -= 5;
          } else {
            ans.push(6);
            position += 6;
            diff -= 5;
          }
          console.log("diff", diff);
        }
        ans.push(diff);
        position = board.ladders[i][1];
        console.log("ans", ans);
        console.log("position", position);
        console.log("---end---");
        break;
      } else if (position < board.snakes[j][0]) {
        console.log("there are only snake");
        console.log("ladder", board.ladders[i][0]);
        console.log("snake", board.snakes[j][0]);
      }
      continue;
    }
  }
  console.log("---loop finish---");
  diff = 100 - position;
  while (diff > 6) {
    console.log("diff", diff);
    ans.push(6);
    console.log("ans", ans);

    diff -= 6;
    position += 6;
    console.log("position", position);
  }
  console.log("diff", diff);

  ans.push(diff);
  position += diff;
  console.log("position", position);
  console.log("ans", ans);
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
    [71, 93],
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
