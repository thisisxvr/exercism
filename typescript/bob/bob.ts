export default class Bob {

  hey(s: string): string {
    if (!s.trim()) { return "Fine. Be that way!" }
    if (s === s.toUpperCase() && /[a-zA-Z]/.test(s)) { return "Whoa, chill out!" }
    if (s.endsWith('?')) { return "Sure." }
    return "Whatever."
  }

}