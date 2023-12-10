function getQuestionPart(phrases) {
  var regex = "";
  var rightRegex = [];
  for (var i = 0; i < phrases[0].length; i++) {
    regex = "";
    for (var j = 0; j < phrases[0].length - i; j++) {
      regex += phrases[0][j + i];
      var position = phrases[1].search(regex);
      if (position >= 0 && phrases[2].search(regex) >= 0) {
        rightRegex.push(regex);
      }
    }
  }
  var matchWord = rightRegex.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });
  var ans = [];
  phrases.forEach(function (e) {
    return ans.push(e.replace(matchWord, ""));
  });
  console.log("ans", ans);
  return ans;
}
getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]);
getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]);
