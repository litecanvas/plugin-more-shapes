/*! More Shapes plugin for litecanvas by Luiz Bills | MIT Licensed */
window.pluginMoreShapes = plugin

/**
 * @param {LitecanvasInstance} engine
 */
export default function plugin(engine) {
  /** Draw oulined ellipse */
  const oval = (x, y, rx, ry, color = 0) => {
    const _ctx = engine.ctx()
    _ctx.strokeStyle = engine.getcolor(color)
    _ctx.beginPath()
    _ctx.ellipse(~~x + ~~rx, ~~y + ~~ry, ~~rx, ~~ry, 0, 0, engine.TWO_PI)
    _ctx.closePath()
    _ctx.stroke()
  }

  /** Draw filled ellipse */
  const ovalfill = (x, y, rx, ry, color = 0) => {
    const _ctx = engine.ctx()
    _ctx.fillStyle = engine.getcolor(color)
    _ctx.beginPath()
    _ctx.ellipse(~~x + ~~rx, ~~y + ~~ry, ~~rx, ~~ry, 0, 0, engine.TWO_PI)
    _ctx.closePath()
    _ctx.fill()
  }

  /**
   * Draw a polygon using a array of points (X, Y)
   *
   * @param {number[]} points
   * @param {number} color
   */
  const vertices = (points) => {
    _ctx = engine.ctx()
    _ctx.beginPath()
    for (let i = 0; i < points.length; i++) {
      if (0 === i) {
        _ctx.moveTo(points[i][0], points[i][1])
      } else {
        _ctx.lineTo(points[i][0], points[i][1])
      }
    }
    _ctx.lineTo(points[0][0], points[0][1])
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
    vertices(_getRegularPolygonPoints(x, y, sides, radius))
    engine.stroke(color)
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
    vertices(_getRegularPolygonPoints(x, y, sides, radius))
    engine.fill(color)
  }

  /**
   * Draw a outlined star
   *
   * @param {number} x
   * @param {number} y
   * @param {number} tips
   * @param {number} radius
   * @param {number} color
   */
  const star = (x, y, tips, radius, color) => {
    vertices(_getStarPoints(x, y, tips, radius))
    engine.stroke(color)
  }

  /**
   * Draw a filled star
   *
   * @param {number} x
   * @param {number} y
   * @param {number} tips
   * @param {number} radius
   * @param {number} color
   */
  const starfill = (x, y, tips, radius, color) => {
    vertices(_getStarPoints(x, y, tips, radius))
    engine.fill(color)
  }

  function _getStarPoints(x, y, tips, radius) {
    const inner = radius / 2
    const max = 2 * tips + 1
    const points = []
    for (let i = 0; i < max; i++) {
      const r = i % 2 === 0 ? radius : inner
      const a = (Math.PI * i) / tips
      points.push([x + r * sin(a), y + r * cos(a)])
    }
    return points
  }

  function _getRegularPolygonPoints(x, y, sides, radius) {
    const points = []
    const TWO_PI = 2 * Math.PI

    for (let i = 0; i < sides; i++) {
      points.push([
        x + radius * cos((i * TWO_PI) / sides),
        y + radius * sin((i * TWO_PI) / sides),
      ])
    }

    return points
  }

  return { oval, ovalfill, vertices, rpol, rpolfill, star, starfill }
}
