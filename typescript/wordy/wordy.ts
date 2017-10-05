export class WordProblem {
  private readonly operands = ['plus', 'minus', 'multiplied', 'divided']
  private arg1: number
  private operand: string
  private arg2: number
  private operand2?: string
  private arg3?: number

  constructor(question: string) {
    const words = question.slice(0, -1).split(' ') // Remove the '?' and create an array.
    this.arg1 = Number(words[2])
    this.operand = words[3]

    if (this.operands.includes(this.operand)) {
      switch (this.operand) {
        case 'multiplied':
        case 'divided':
          words.splice(4, 1) // Remove 'by' from array for operand 1.
      }
      this.arg2 = Number(words[4])
    }

    if (this.operands.includes(words[5])) {
      this.operand2 = words[5]
      switch (this.operand2) {
        case 'multiplied':
        case 'divided':
          words.splice(6, 1) // Remove 'by' from array for operand 2.
      }
      this.arg3 = Number(words[6])
    }
  }

  answer(): number {
    if (!this.operands.includes(this.operand)) { throw new ArgumentError() }
    let answer = this.calculate(this.arg1, this.operand, this.arg2)
    if (this.operand2 && this.arg3) { answer = this.calculate(answer, this.operand2, this.arg3) }
    return answer
  }

  private calculate(arg1: number, operand: string, arg2: number): number {
    switch (operand) {
      case 'plus':
        return arg1 + arg2
      case 'minus':
        return arg1 - arg2
      case 'divided':
        return arg1 / arg2
      default:
        return arg1 * arg2
    }
  }
}

export class ArgumentError extends Error {
  constructor() { super() }
}