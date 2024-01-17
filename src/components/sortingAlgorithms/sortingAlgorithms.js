export function getMergeSortAnimations(array) {
  const animations = [];
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  merge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function merge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let i = startIdx;
  let j = middleIdx + 1;
  const tempArray = [];

  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);

    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([i, auxiliaryArray[i]]);
      tempArray.push(auxiliaryArray[i++]);
    } else {
      animations.push([j, auxiliaryArray[j]]);
      tempArray.push(auxiliaryArray[j++]);
    }
  }

  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([i, auxiliaryArray[i]]);
    tempArray.push(auxiliaryArray[i++]);
  }

  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([j, auxiliaryArray[j]]);
    tempArray.push(auxiliaryArray[j++]);
  }

  for (let k = startIdx; k <= endIdx; k++) {
    animations.push([k, k]);
    animations.push([k, k]);
    animations.push([k, tempArray[k - startIdx]]);
    mainArray[k] = tempArray[k - startIdx];
  }
}

// Quick Sort
export function getQuickSortAnimations(array) {
  const animations = [];
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(array, low, high, animations) {
  if (low < high) {
    const pivotIndex = partition(array, low, high, animations);
    quickSortHelper(array, low, pivotIndex - 1, animations);
    quickSortHelper(array, pivotIndex + 1, high, animations);
  }
}

function partition(array, low, high, animations) {
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    animations.push([j, high]);
    animations.push([j, high]);

    if (array[j] < pivot) {
      i++;
      animations.push([i, array[j]]);
      animations.push([j, array[i]]);
      swap(array, i, j);
    }
  }

  animations.push([i + 1, array[high]]);
  animations.push([i + 1, array[high]]);
  swap(array, i + 1, high);

  return i + 1;
}

// Heap Sort
export function getHeapSortAnimations(array) {
  const animations = [];
  heapSort(array, animations);
  return animations;
}

function heapSort(array, animations) {
  const n = array.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i, animations);
  }

  for (let i = n - 1; i > 0; i--) {
    animations.push([0, i]);
    animations.push([0, i]);
    swap(array, 0, i);

    heapify(array, i, 0, animations);
  }
}

function heapify(array, n, i, animations) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    animations.push([i, largest]);
    animations.push([i, largest]);
    swap(array, i, largest);

    heapify(array, n, largest, animations);
  }
}

// Bubble Sort
export function getBubbleSortAnimations(array) {
  const animations = [];
  bubbleSort(array, animations);
  return animations;
}

function bubbleSort(array, animations) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);

      if (array[j] > array[j + 1]) {
        animations.push([j, array[j + 1]]);
        animations.push([j + 1, array[j]]);
        swap(array, j, j + 1);
      } else {
        animations.push([j, array[j]]);
        animations.push([j + 1, array[j + 1]]);
      }
    }
  }
}

// Helper function to swap elements in an array
function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
