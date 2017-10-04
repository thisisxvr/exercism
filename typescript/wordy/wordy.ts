class WordProblem {
  arg1: number
  operand: string
  arg2: number
  operand2?: string
  arg3?: number

  constructor(question: string) {
    // if (typeof(question !== 'string')) { throw 'ArgumentError' }
    const words = question.slice(0, -1).split(' ')
    const operands = ['plus', 'minus', 'multiplied', 'divided', 'raised']
    this.arg1 = Number(words[2])
    this.operand = words[3]

    if (operands.includes(this.operand)) {
      switch (this.operand) {
        case 'multiplied':
        case 'divided':
          this.arg2 = Number(words[5])
          break
        default:
          this.arg2 = Number(words[4])
          break
      }
    }
    // console.log(words, this.arg1, this.operand, this.arg2)

    if (operands.includes(words[5]) || operands.includes(words[6])) {
      words[5] in operands ? this.operand2 = words[5] : this.operand2 = words[6]

      switch (this.operand2) {
        case 'multiplied':
        case 'divided':
          this.arg3 = Number(words[8])
          break
        default:
          this.arg3 = Number(words[7])
          break
      }
    } else {
      this.operand2 = undefined
      this.arg3 = undefined
    }
  }

  answer(): number {
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

class ArgumentError { }

export { ArgumentError, WordProblem }