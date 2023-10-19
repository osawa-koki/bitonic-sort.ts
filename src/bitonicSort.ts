export default function bitonicSort (array: number[]): void {
  if ((array.length & (array.length - 1)) !== 0) {
    throw new Error('The length of the array must be a power of 2.')
  }
  _bitonicSort(array, 0, array.length, true)
}

function _bitonicSort (array: number[], start: number, size: number, ascending: boolean): void {
  if (size <= 1) {
    return
  }
  const half = size >> 1
  _bitonicSort(array, start, half, true)
  _bitonicSort(array, start + half, half, false)
  _bitonicMerge(array, start, size, ascending)
}

function _bitonicMerge (array: number[], start: number, size: number, ascending: boolean): void {
  if (size <= 1) {
    return
  }
  const half = size >> 1
  for (let i = start; i < start + half; i++) {
    if ((array[i] > array[i + half]) === ascending) {
      [array[i], array[i + half]] = [array[i + half], array[i]]
    }
  }
  _bitonicMerge(array, start, half, ascending)
  _bitonicMerge(array, start + half, half, ascending)
}
