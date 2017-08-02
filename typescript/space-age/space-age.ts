const enum OrbitalPeriod {
  Mercury = 0.2408467,
  Venus = 0.61519726,
  Mars = 1.8808158,
  Jupiter = 11.862615,
  Saturn = 29.447498,
  Uranus = 84.016846,
  Neptune = 164.79132
}

export default class SpaceAge {
  constructor(private readonly _seconds: number) { }
  get seconds(): number { return this._seconds }

  public onEarth(): number {
    return Number((this._seconds / 60 / 60 / 24 / 365.25).toFixed(2))
  }

  public onMercury(): number {
    return Number((this._seconds / 60 / 60 / 24 / 365.25 / OrbitalPeriod.Mercury).toFixed(2))
  }

  public onVenus(): number {
    return Number((this._seconds / 60 / 60 / 24 / 365.25 / OrbitalPeriod.Venus).toFixed(2))
  }

  public onMars(): number {
    return Number((this._seconds / 60 / 60 / 24 / 365.25 / OrbitalPeriod.Mars).toFixed(2))
  }

  public onJupiter(): number {
    return Number((this._seconds / 60 / 60 / 24 / 365.25 / OrbitalPeriod.Jupiter).toFixed(2))
  }

  public onSaturn(): number {
    return Number((this._seconds / 60 / 60 / 24 / 365.25 / OrbitalPeriod.Saturn).toFixed(2))
  }

  public onUranus(): number {
    return Number((this._seconds / 60 / 60 / 24 / 365.25 / OrbitalPeriod.Uranus).toFixed(2))
  }

  public onNeptune(): number {
    return Number((this._seconds / 60 / 60 / 24 / 365.25 / OrbitalPeriod.Neptune).toFixed(2))
  }
}