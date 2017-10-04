export default class RobotName {
  name: string
  robots: Set<string>

  constructor() {
    this.robots = new Set()
    this.name = this.getName()
  }

  resetName(): void { this.name = this.getName() }

  private getName(): string {
    let name
    do {
      name = this.getRandomChar()
        + this.getRandomChar()
        + this.getRandomDigit()
        + this.getRandomDigit()
        + this.getRandomDigit()
    } while (this.robots.has(name))
    this.robots.add(name)
    return name
  }

  private getRandomChar(): string {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)]
  }

  private getRandomDigit(): string {
    return '0123456789'[Math.floor(Math.random() * 10)]
  }
}
