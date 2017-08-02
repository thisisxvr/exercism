class Pangram {
  sentence: string
  constructor(_sentence: string) { this.sentence = _sentence.toLowerCase() }

  isPangram(): boolean {
    if (this.sentence == null || undefined) { return false }

    let chars = new Set()
    for (let i = this.sentence.length; i--; i >= 0) {
      let c = this.sentence.charCodeAt(i) // get ASCII code of char
      if (c > 96 && c < 123) { chars.add(c) } // accepts lowercase alphabets a through z
    }

    return chars.size === 26 ? true : false
  }
}

export default Pangram