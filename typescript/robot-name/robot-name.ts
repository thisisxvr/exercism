export default class RobotName {
  name = ''
  robots = new Set()

  constructor() {
    const name = this.getName()
    this.robots.add(name)
    this.name = name
  }

  resetName() {
    let name
    do {
      name = this.getName()
    } while (this.robots.has(name))
    this.robots.add(name)
    this.name = name
  }

  private getName(): string {
    let name = this.getRandomChar()
    let char
    do {
      char = this.getRandomChar()
    } while (char === name)
    name += char

    const num = this.getRandomNum()
    if (num < 10) { name += '00' + String(num) }
    else if (num < 100) { name += '0' + String(num) }
    else { name += num }

    return name
  }

  private getRandomChar(): string {
    return String.fromCharCode(Math.abs(
      Math.random() * (91 - 65) + 65))  // 65 and 91 being unicode A and Z, respectively
  }

  private getRandomNum(): number {
    return Math.round(Math.random() * (999 - 0) + 0)
  }
}
