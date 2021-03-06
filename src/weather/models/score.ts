export interface ScoreCriteria {
  maxTemp: number
  minTemp: number
  maxWind: number
}

export interface Score {
  value: number
  reasons: Reasons[]
  warnings: Reasons[]
}

export interface Scores {
  current: Score
  hourly: Score[]
}

export enum Reasons {
  ALERTS = 'alerts',
  PRECIPITATION = 'precipitation',
  WINDY = 'windy',
  TOO_WINDY = 'too-windy',
  HOT = 'hot',
  TOO_HOT = 'too-hot',
  COLD = 'cold',
  TOO_COLD = 'too-cold',
  UV_INDEX = 'uvindex',
}

export interface Reason {
  text: Reasons
  check: boolean
  score: number
}
