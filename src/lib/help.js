export const __empty = function (e) {
  for(let i in e) {
    return false
  }
  return true
}