const bubbleSort = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }

    if (lowest !== i) {
      let temp = array[lowest];
      array[lowest] = array[i];
      array[i] = temp;
    }
  }

  return array;
};

const insertionSort = (array) => {
  let currentVal;
  for (let i = 1; i < array.length; i++) {
    currentVal = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = currentVal;
  }

  return array;
};

const getDataFromMonthlyData = (date) => {
  let year = Number(date.slice(0, 4));
  let month = Number(date.slice(4)) - 1;

  console.log(year);
  console.log(month);
  let dateObj = new Date(year, month);
  return dateObj.getTime();
};

console.log(getDataFromMonthlyData("202209"));
