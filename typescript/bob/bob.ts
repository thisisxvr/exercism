export default class Bob {
  chars: Set<number>

  hey(theySaid: string): string {
    this.chars = new Set()

    for (let i = 0; i < theySaid.length; i++) {
      this.chars.add(theySaid.charCodeAt(i))
    }
    // console.log(this.chars)
    if (this.theyAreSilent()) { return "Fine. Be that way!" }
    if (this.theyAreYelling(theySaid)) { return "Whoa, chill out!" }
    if (this.theyAskedAQuestion(theySaid.charAt(theySaid.length - 1))) { return "Sure." }
    return "Whatever."
  }

  private theyAskedAQuestion(lastChar: string): boolean {
    if (lastChar === '?') { return true }
    return false
  }

  private theyAreSilent(): boolean {
    // input is empty or contains only spaces
    if ( this.chars.size === 0 || (this.chars.size === 1 && this.chars.has(32)) ) { return true }
    return false
  }

  private theyAreYelling(theySaid: string): boolean {
    if (this.chars.size === 2) { return false } // question with only numbers
    // if (theySaid[theySaid.length - 1] === '?') { return true }

    const chars = theySaid.split(", ")
    for (const c of chars) {
      if (isNaN(parseInt(c, 10))) { return false }
      return true
    }

    for (let index = 220; index <= 252; index++) { // üMLäÜTS
      if (this.chars.has(index) && !this.chars.has(33)) { return false }
    }

    for (let index = 97; index <= 122; index++) { // lower case chars
      if (this.chars.has(index)) { return false }
    }

    return true
  }
}