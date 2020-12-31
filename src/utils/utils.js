const MAX_INTEGER = 50
const MIN_INTEGER = 1

const getRandomInteger = (min = MIN_INTEGER, max = MAX_INTEGER) => Math.floor(
  Math.random() * (max + 1 - min) + min,
)

// eslint-disable-next-line import/prefer-default-export
export { getRandomInteger }
