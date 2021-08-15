// FUNCTIONS
const sumArrayItems = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum
}

const findMaxValueOf = (array) => {
  let max = -Infinity
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i]
  }
  return max
}

const findAverangeOfArray = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  return sum / array.length
}

const countAmountOfMajorThan = (array, number) => {
  let ammount = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) ammount++
  }
  return ammount
}

const replaceNegativesWihtCero = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) array[i] = 0
  }
  return array
}

// TESTS

describe('sumArrayItems', function () {
  it('should return 8 when [1,2,5] is passed', function () {
    expect(sumArrayItems([1, 2, 5])).toEqual(8)
  })
})

describe('findMaxValueOf', function () {
  it('should return 7 when [-3,3,5,7] is passed', function () {
    expect(findMaxValueOf([-3, 3, 5, 7])).toEqual(7)
  })
})

describe('findAverangeOfArray', function () {
  it('should return 7.2 when [1,3,5,7,20] is passed', function () {
    expect(findAverangeOfArray([1, 3, 5, 7, 20])).toEqual(7.2)
  })
})

describe('countAmountOfMajorThan', function () {
  it('should return 2 when [1,3,5,7],3 is passed', function () {
    expect(countAmountOfMajorThan([1, 3, 5, 7], 3)).toEqual(2)
  })
})

describe('replaceNegativesWihtCero', function () {
  it('should return [1,5,10,0] when [1,5,10,-2] is passed', function () {
    expect(replaceNegativesWihtCero([1, 5, 10, -2])).toEqual([1, 5, 10, 0])
  })
})
