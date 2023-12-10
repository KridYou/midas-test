function getClockAngle(x) {
    var hr = Number(x.split(":")[0]);
    var min = Number(x.split(":")[1]);
    var hrAg = hr <= 12 ? hr * 30 + min / 2 : (hr - 12) * 30 + min / 2;
    var minAg = min * 6;
    var ans = 0;
    ans += hrAg - minAg;
    if (ans >= 180) {
        ans = ans - 180;
    }
    else if (ans <= 0) {
        ans = 0 - ans;
    }
    console.log("ans", ans);
    return ans;
}
getClockAngle("16:52");
