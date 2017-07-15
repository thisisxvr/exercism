class Gigasecond {
  milliseconds: number
  constructor(_date: Date) { this.milliseconds = _date.getTime() }
  date(): Date { return new Date(this.milliseconds + Math.pow(10,12)) }
}

export default Gigasecond