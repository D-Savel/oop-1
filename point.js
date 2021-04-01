class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  distance(point) {
    return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2))
  }
}

module.exports = Point
