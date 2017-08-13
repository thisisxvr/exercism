export default class Raindrops {
  convert(num: number): string {
    let rainspeak: string = ""
    if (num % 3 === 0) { rainspeak += "Pling" }
    if (num % 5 === 0) { rainspeak += "Plang" }
    if (num % 7 === 0) { rainspeak += "Plong" }
    return Boolean(rainspeak) ? rainspeak : rainspeak = String(num)
  }
}