module.exports = function (bus) {
  return function (req, res, next) {
    if (bus) res.bus = bus
    next()
  }
}
