export type LMS = { L: number; M: number; S: number };

export function zscore(measured: number, L: number, M: number, S: number) {
  if (!measured || measured <= 0 || !M || M <= 0) return NaN;
  if (Math.abs(L) < 1e-12) return Math.log(measured / M) / S;
  return (Math.pow(measured / M, L) - 1) / (L * S);
}

export function zToPercentile(z: number) {
  // approximate CDF using erf
  const erf = (x: number) => {
    const sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;
    const t = 1 / (1 + p * x);
    const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return sign * y;
  };
  return 0.5 * (1 + erf(z / Math.sqrt(2)));
}

export function categorizeWeightForAgeZ(z: number) {
  if (isNaN(z)) return 'unknown';
  if (z < -3) return 'Severely underweight (< -3SD)';
  if (z < -2) return 'Underweight (< -2SD)';
  if (z > 2) return 'Overweight (> +2SD)';
  return 'Normal (-2 to +2SD)';
}

export function categorizeHeightForAgeZ(z: number) {
  if (isNaN(z)) return 'unknown';
  if (z < -3) return 'Severely stunted (< -3SD)';
  if (z < -2) return 'Stunted (< -2SD)';
  if (z > 2) return 'Tall (> +2SD)';
  return 'Normal (-2 to +2SD)';
}

export function categorizeWeightForHeightZ(z: number) {
  if (isNaN(z)) return 'unknown';
  if (z < -3) return 'Severe wasting (< -3SD)';
  if (z < -2) return 'Wasting (< -2SD)';
  if (z > 2) return 'Overweight (> +2SD)';
  return 'Normal (-2 to +2SD)';
}
