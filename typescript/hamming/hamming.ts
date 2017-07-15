class Hamming {
  compute(strand_one: string, strand_two: string) {
    if (strand_one.length !== strand_two.length) {
      throw 'DNA strands must be of equal length.'
    }

    let sOneArray = strand_one.split('')
    let sTwoArray = strand_two.split('')
    let count = 0

    for (let i = strand_one.length; i--; i >= 0) {
      if (sOneArray[i] !== sTwoArray[i]) { count++ }
    }

    return count
  }
}

export default Hamming