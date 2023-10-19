import shuffle from './src/shuffle'
import bitonicSort from './src/bitonicSort'

const array = Array.from({ length: 16 }, (_, i) => i + 1)

shuffle(array)

console.log(`Shuffled array: ${array.join(', ')}`)

bitonicSort(array)

console.log(`Sorted array: ${array.join(', ')}`)
