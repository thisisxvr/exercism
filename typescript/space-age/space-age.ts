export default class SpaceAge {
  constructor(private readonly _seconds: number) { }
  get seconds(): number { return this._seconds }

  private solarYear = (period: number): number => { return parseFloat((this._seconds / (31557600 * period)).toFixed(2)) }

  public onEarth   = (): number => this.solarYear(1)
  public onMercury = (): number => this.solarYear(0.2408467)
  public onVenus   = (): number => this.solarYear(0.61519726)
  public onMars    = (): number => this.solarYear(1.8808158)
  public onJupiter = (): number => this.solarYear(11.862615)
  public onSaturn  = (): number => this.solarYear(29.447498)
  public onUranus  = (): number => this.solarYear(84.016846)
  public onNeptune = (): number => this.solarYear(164.79132)
}