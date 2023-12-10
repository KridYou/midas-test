function minEnergy(
  start: number,
  shops: number[],
  stations: number[],
  target: number
): number {
  let ans = 0;
  let position: number = start;
  let energyArr: number[] = [];
  let walkWthTrainDisArr: number[] = [];
  for (let i = 0; i < shops.length; i++) {
    let walkDis: number = shops[i] - position;

    for (let j = 0; j < stations.length; j++) {
      for (let k = j + 1; k < stations.length; k++) {
        let walkWthTrainDis =
          Math.abs(stations[j] - position) +
          Math.abs(Math.abs(stations[k] - shops[i]));

        walkWthTrainDisArr.push(walkWthTrainDis);
      }
    }

    let minVal = Math.min(...walkWthTrainDisArr);

    if (walkDis < minVal) {
      energyArr.push(walkDis);
    } else {
      energyArr.push(minVal);
    }
    position = shops[i];
  }

  let walkDis: number = target - position;
  walkWthTrainDisArr = [];

  for (let j = 0; j < stations.length; j++) {
    for (let k = j + 1; k < stations.length; k++) {
      let walkWthTrainDis =
        Math.abs(stations[j] - position) +
        Math.abs(Math.abs(stations[k] - target));

      walkWthTrainDisArr.push(walkWthTrainDis);
    }
  }
  let minVal = Math.min(...walkWthTrainDisArr);

  if (walkDis < minVal) {
    energyArr.push(walkDis);
  } else {
    energyArr.push(minVal);
  }
  position = target;

  energyArr.forEach((energy) => (ans += energy));
  // console.log("ans", ans);
  return 9;
}

minEnergy(0, [2, 9], [3, 6], 11);
