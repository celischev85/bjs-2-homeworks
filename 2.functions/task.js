function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: Infinity, max: -Infinity, avg: 0 };
  }

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
    sum += arr[i];
  }

  const avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;

  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
    } else {
      sumOdd += arr[i];
    }
  }

  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEven = 0;
  let countEven = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      sumEven += arr[i];
      countEven += 1;
    }
  }

  if (countEven === 0) return 0;

  return Number((sumEven / countEven).toFixed(2));
}

function makeWork(arrOfArr, func) {
  if (arrOfArr.length === 0) return 0;

  let maxResult = func(...arrOfArr[0]);

  for (let i = 1; i < arrOfArr.length; i += 1) {
    const result = func(...arrOfArr[i]);
    if (result > maxResult) {
      maxResult = result;
    }
  }

  return maxResult;
}



