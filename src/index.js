/*! More Shapes plugin for litecanvas v0.4.0 by Luiz Bills | MIT Licensed */
window.pluginMoreShapes = plugin

export default function plugin(engine) {
  const oval = (x, y, rx, ry, color = 0) => {
    const _ctx = engine.ctx()
    _ctx.strokeStyle = engine.getcolor(color)
    _ctx.beginPath()
    _ctx.ellipse(~~x + ~~rx, ~~y + ~~ry, ~~rx, ~~ry, 0, 0, engine.TWO_PI)
    _ctx.closePath()
    _ctx.stroke()
  }

  const ovalfill = (x, y, rx, ry, color = 0) => {
    const _ctx = engine.ctx()
    _ctx.fillStyle = engine.getcolor(color)
    _ctx.beginPath()
    _ctx.ellipse(~~x + ~~rx, ~~y + ~~ry, ~~rx, ~~ry, 0, 0, engine.TWO_PI)
    _ctx.closePath()
    _ctx.fill()
  }

  /**
   * Draw a polygon from points
   *
   * @param {number[]} points
   * @param {number} color
   */
  const pol = (points, color = 0) => {
    const _ctx = engine.ctx()
    _ctx.strokeStyle = engine.getcolor(color)
    _ctx.beginPath()
    const len = points.length
    for (let i = 0; i < len; i += 2) {
      0 === i
        ? _ctx.moveTo(~~points[i], ~~points[i + 1])
        : _ctx.lineTo(~~points[i], ~~points[i + 1])
    }
    _ctx.stroke()
  }

  /**
   * Draw a filled polygon from points
   *
   * @param {number[]} points
   * @param {number} color
   */
  const polfill = (points, color = 0) => {
    const _ctx = engine.ctx()
    _ctx.fillStyle = engine.getcolor(color)
    _ctx.beginPath()
    const len = points.length
    for (let i = 0; i < len; i += 2) {
      0 === i
        ? _ctx.moveTo(~~points[i], ~~points[i + 1])
        : _ctx.lineTo(~~points[i], ~~points[i + 1])
    }
    _ctx.fill()
  }

  /**
   * Draw a regular polygon
   *
   * @param {number} x
   * @param {number} y
   * @param {number} sides
   * @param {number} radius
   * @param {number} color
   */
  const rpol = (x, y, sides, radius, color) => {
    pol(_getRegularPolygonPoints(x, y, sides, radius), color)
  }

  /**
   * Draw a filled regular polygon
   *
   * @param {number} x
   * @param {number} y
   * @param {number} sides
   * @param {number} radius
   * @param {number} color
   */
  const rpolfill = (x, y, sides, radius, color) => {
    polfill(_getRegularPolygonPoints(x, y, sides, radius), color)
  }

  /**
   * Draw a star
   *
   * @param {number} x
   * @param {number} y
   * @param {number} npoints
   * @param {number} radius
   * @param {number} color
   */
  const star = (x, y, npoints, radius, color) => {
    pol(_getStarPoints(x, y, npoints, radius), color)
  }

  /**
   * Draw a filled star
   *
   * @param {number} x
   * @param {number} y
   * @param {number} npoints
   * @param {number} radius
   * @param {number} color
   */
  const starfill = (x, y, npoints, radius, color) => {
    polfill(_getStarPoints(x, y, npoints, radius), color)
  }

  function _getStarPoints(x, y, npoints, radius) {
    const inner = radius / 2
    const max = 2 * npoints + 1
    const points = []
    for (let i = 0; i < max; i++) {
      const r = i % 2 === 0 ? radius : inner
      const a = (Math.PI * i) / npoints
      points.push(x + r * sin(a))
      points.push(y + r * cos(a))
    }
    return points
  }

  function _getRegularPolygonPoints(x, y, sides, radius) {
    const points = []
    const TWO_PI = 2 * Math.PI

    for (let i = 0; i < sides; i++) {
      points.push(x + radius * cos((i * TWO_PI) / sides))
      points.push(y + radius * sin((i * TWO_PI) / sides))
    }

    points.push(points[0])
    points.push(points[1])

    return points
  }

  return { oval, ovalfill, pol, polfill, rpol, rpolfill, star, starfill }
}
