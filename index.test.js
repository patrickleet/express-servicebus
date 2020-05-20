const expressServicebus = require('express-servicebus')

describe('express-servicebus', () => {
  it('adds bus to res object', () => {
    let bus = {
      property: true
    }
    let mw = expressServicebus(bus)
    let req = {}
    let res  = {}
    let next = jest.fn()

    mw(req, res, next)

    expect(next).toBeCalled()

    expect(res.bus).toEqual(bus)
  })

  it('does nothing if bus is not provided', () => {
    let mw = expressServicebus()
    let req = {}
    let res  = {}
    let next = jest.fn()

    mw(req, res, next)

    expect(next).toBeCalled()

    expect(res).toEqual(res)
  })
})