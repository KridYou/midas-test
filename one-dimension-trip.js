function minEnergy(start, shops, stations, target) {
    var ans = 0;
    var position = start;
    var energyArr = [];
    var walkWthTrainDisArr = [];
    for (var i = 0; i < shops.length; i++) {
        var walkDis_1 = shops[i] - position;
        for (var j = 0; j < stations.length; j++) {
            for (var k = j + 1; k < stations.length; k++) {
                var walkWthTrainDis = Math.abs(stations[j] - position) +
                    Math.abs(Math.abs(stations[k] - shops[i]));
                walkWthTrainDisArr.push(walkWthTrainDis);
            }
        }
        var minVal_1 = Math.min.apply(Math, walkWthTrainDisArr);
        if (walkDis_1 < minVal_1) {
            energyArr.push(walkDis_1);
        }
        else {
            energyArr.push(minVal_1);
        }
        position = shops[i];
    }
    var walkDis = target - position;
    walkWthTrainDisArr = [];
    for (var j = 0; j < stations.length; j++) {
        for (var k = j + 1; k < stations.length; k++) {
            var walkWthTrainDis = Math.abs(stations[j] - position) +
                Math.abs(Math.abs(stations[k] - target));
            walkWthTrainDisArr.push(walkWthTrainDis);
        }
    }
    var minVal = Math.min.apply(Math, walkWthTrainDisArr);
    if (walkDis < minVal) {
        energyArr.push(walkDis);
    }
    else {
        energyArr.push(minVal);
    }
    position = target;
    energyArr.forEach(function (energy) { return (ans += energy); });
    // console.log("ans", ans);
    return 9;
}
minEnergy(0, [2, 9], [3, 6], 11);
