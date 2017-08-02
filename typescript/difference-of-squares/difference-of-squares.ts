export default class Squares {
  difference:   number
  sumOfSquares: number
  squareOfSums: number

  constructor(private readonly _n: number) { 
    let sqr           = 0
    this.squareOfSums = 0
    this.sumOfSquares = 0
    for (let i = 1; i <= this._n; i++) { sqr += i }
    for (let i = 1; i <= this._n; i++) { this.sumOfSquares += i ** 2 }
    this.squareOfSums = sqr ** 2
    this.difference   = this.squareOfSums - this.sumOfSquares
  }
}