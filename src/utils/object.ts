import _ from 'lodash'

export const diff = (
  after: object,
  before: object
): { original: object; updated: object } => {
  const diff = { original: {}, updated: {} }

  _.differenceWith(
    Object.entries(after),
    Object.entries(before),
    _.isEqual
  ).forEach(([k, v]) => {
    Object.defineProperty(diff.original, k, {
      value: (before as any)[k], // eslint-disable-line @typescript-eslint/no-explicit-any
      enumerable: true,
    })

    Object.defineProperty(diff.updated, k, {
      value: v,
      enumerable: true,
    })
  })

  return diff
}
