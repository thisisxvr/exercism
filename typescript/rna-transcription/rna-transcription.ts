class Transcriptor {
  toRna(strand: string) {
    return strand.split('').map((nucleotide) => {
      switch (nucleotide) {
        case 'G':
          return 'C'
        case 'C':
          return 'G'
        case 'T':
          return 'A'
        case 'A':
          return 'U'
        default:
          throw new Error ('Invalid input DNA.')
      }
    }).join('')
  }
}

export default Transcriptor