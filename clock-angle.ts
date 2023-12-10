function getClockAngle(x: string): number {
  let hr: number = Number(x.split(":")[0]);
  let min: number = Number(x.split(":")[1]);

  let hrAg: number = hr <= 12 ? hr * 30 + min / 2 : (hr - 12) * 30 + min / 2;
  let minAg: number = min * 6;

  let ans: number = 0;
  ans += hrAg - minAg;

  if (ans >= 180) {
    ans = ans - 180;
  } else if (ans <= 0) {
    ans = 0 - ans;
  }
  console.log("ans", ans);
  return ans;
}

getClockAngle("16:52");
