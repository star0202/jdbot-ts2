import _ from 'lodash'

export const diff = (after: object, before: object): object[] => {
  const diff: object[] = [{}, {}]

  _.differenceWith(
    Object.entries(after),
    Object.entries(before),
    _.isEqual
  ).forEach(([k, v]) => {
    Object.defineProperty(diff[0], k, {
      value: (before as any)[k], // eslint-disable-line @typescript-eslint/no-explicit-any
      enumerable: true,
    })

    Object.defineProperty(diff[1], k, {
      value: v,
      enumerable: true,
    })
  })

  return diff
}
