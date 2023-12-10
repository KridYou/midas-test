function getQuestionPart(phrases: string[]): string[] {
  let regex: string = "";
  let rightRegex: string[] = [];

  for (let i = 0; i < phrases[0].length; i++) {
    regex = "";
    for (let j = 0; j < phrases[0].length - i; j++) {
      regex += phrases[0][j + i];
      let position = phrases[1].search(regex);
      if (position >= 0 && phrases[2].search(regex) >= 0) {
        rightRegex.push(regex);
      }
    }
  }

  var matchWord = rightRegex.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });

  let ans: string[] = [];

  phrases.forEach((e) => ans.push(e.replace(matchWord, "")));

  // console.log("ans", ans);

  return ans;
}

getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]);
getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]);
