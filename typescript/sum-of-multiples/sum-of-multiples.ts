class SumOfMultiples {
  private numbers: number[]

  constructor(args: number[]) {
    this.numbers = args
  }

  to(ceiling: number): number {
    const multiples = new Set()

    this.numbers.forEach((num) => {
      for (let i = 1, multiple = 0; multiple < ceiling; multiple = num * i, i++) {
        multiples.add(multiple)
      }
    })

    let sum = 0
    multiples.forEach((n) => { sum += n })
    return sum
  }
}

export default (numbers: number[]) => new SumOfMultiples(numbers)