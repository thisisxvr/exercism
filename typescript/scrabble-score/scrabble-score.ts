
  enum Values {
    A = 1, E = 1, I = 1, O = 1, U = 1, L = 1, N = 1, R = 1, S = 1, T = 1,
    D = 2, G = 2,
    B = 3, C = 3, M = 3, P = 3,
    F = 4, H = 4, V = 4, W = 4, Y = 4,
    K = 5,
    J = 8, X = 8,
    Q = 10, Z = 10
  }

function score(words: any): number {
    if (typeof words !== "string") { return 0 }
    let score = 0
    words.toUpperCase().split('').forEach( c => {
      if (c in Values) { score += (<any>Values)[c] }  // typecasting enum to 'any' to get around TS annoyance: https://blog.oio.de/2014/02/28/typescript-accessing-enum-values-via-a-string/
    })
    return score
  }


export default score