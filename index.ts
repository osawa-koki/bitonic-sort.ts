import shuffle from './src/shuffle'
import bitonicSort from './src/bitonicSort'

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

shuffle(array)

console.log(`Shuffled array: ${array.join(', ')}`)

bitonicSort(array)

console.log(`Sorted array: ${array.join(', ')}`)
