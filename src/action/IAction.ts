

interface IAction<T> {
  type: string
  payload: T
}

export type { IAction }