//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255
function Sum1toN(n) {
  let sum = 0
  for (let i = 0; i <= n; i++) {
    sum = sum + i
  }
  return sum
}

//devuelve la suma del primer y último número en el array
function sumFirstLast(arr) {
  return arr[0] + arr[arr.length - 1]
}

function printAverage(x) {
  sum = 0
  for (var i = 0; i < x.length; i++) {
    sum = sum + x[i]
  }
  return sum / x.length
}
// y = printAverage([1, 2, 3])
// console.log(y) // should log 2

function sumMaxMin(arr) {
  let max = -Infinity
  let min = Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    if (arr[i] < min) min = arr[i]
  }
  return max + min
}

describe('Sum1toN', function () {
  it('should return 3 when we pass 2 as an argument', function () {
    expect(Sum1toN(2)).toEqual(3)
  })
  it('should return 6 when we pass 3 as an argument', function () {
    expect(Sum1toN(3)).toEqual(6)
  })
  it('should return 10 when we pass 4 as an argument', function () {
    expect(Sum1toN(4)).toEqual(10)
  })
  it('should return 10 when we pass 5 as an argument', function () {
    expect(Sum1toN(5)).toEqual(15)
  })
  it('should return 10 when we pass 4 as an argument', function () {
    expect(Sum1toN(6)).toEqual(21)
  })
})

describe('sumFirstLast', function () {
  it('should return 3 when we pass [1,2] as an argument', function () {
    expect(sumFirstLast([1, 2])).toEqual(3)
  })
  it('should return 10 when we pass [2,3,8] as an argument', function () {
    expect(sumFirstLast([2, 3, 8])).toEqual(10)
  })
  it('should return -10 when we pass [-6,23,3,-4] as an argument', function () {
    expect(sumFirstLast([-6, 23, 3, -4])).toEqual(-10)
  })
  it('should return 20 when we pass [18,23,3,2] as an argument', function () {
    expect(sumFirstLast([18, 23, 3, 2])).toEqual(20)
  })
  it('should return 100 when we pass [50,23,3,50] as an argument', function () {
    expect(sumFirstLast([50, 23, 3, 50])).toEqual(100)
  })
})

describe('printAverage', function () {
  it('should return 2 when we pass [1, 2, 3] as an argument', function () {
    expect(printAverage([1, 2, 3])).toEqual(2)
  })
})

describe('sumMaxMin', function () {
  it('should return 11 when we pass [1,3,10] as an argument', function () {
    expect(sumMaxMin([1, 3, 10])).toEqual(11)
  })
})
