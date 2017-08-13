export default class Raindrops {
  convert(num: number): string {
    let rainspeak: string = ""
    if (num % 3 === 0) { rainspeak += "Pling" }
    if (num % 5 === 0) { rainspeak += "Plang" }
    if (num % 7 === 0) { rainspeak += "Plong" }
    if (num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0) { rainspeak = String(num) }      
    return rainspeak
  }
}