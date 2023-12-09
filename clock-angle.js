function getClockAngle(x) {
    var hr = Number(x.split(":")[0]);
    var min = Number(x.split(":")[1]);
    var hrAg = hr <= 12 ? hr * 30 + min / 2 : (hr - 12) * 30 + min / 2;
    var minAg = min * 6;
    console.log(hrAg, minAg);
    var ans = 0;
    console.log(ans);
    ans += hrAg - minAg;
    console.log(typeof ans);
    if (ans >= 180) {
        console.log("ans too much");
        ans = ans - 180;
        console.log(ans);
    }
    else if (ans <= 0) {
        console.log("ans is negative");
        ans = 0 - ans;
        console.log(ans);
    }
    console.log(ans);
    return 10;
}
getClockAngle("16:52");
