# More Shapes plugin for litecanvas

Plugin to draw shapes like ellipse and polygons in [litecanvas](https://github.com/litecanvas/game-engine) games.

## Install

**NPM**: `npm i @litecanvas/plugin-more-shapes`

**CDN**: `https://unpkg.com/@litecanvas/plugin-more-shapes/dist/dist.js`

## Usage

See a demo on [playground](https://litecanvas.js.org?c=eJx9U2Fv2jAQ%2FZ5fcUKaapdAEgqsQuq0aUUFaeumgbTto5sY8Oralu200Kn%2FfbaTLGnZilC4e3e5d%2Ffu4NSCscRSuIBJxJ1HxJZ7Lw2eYQU1wYs4szQn4p4YhKNoU4rcMimACWYRht8RAJekWOWaKYucB3Cys1aZWZKUQt1uh7m8S963VRLFyy0Tgzup6cDsiKImKZix4TH8ZU5iCFWQpqbkFsPFu8DiP2zTwqWhqCr12VVahUI45D25p7c4E7QgZocW8%2BXVYg0JnKcet3RvDXukKDvH0VNnJkuUokU9lef69OXD5fL6CoOmttTCoY1o%2FX5lvYHpsxKlKhz8aolK6b4Td5iOnr1caPLw6qs5N%2BjMj6BKN1aYRRNhuKf8OL9ez7%2F9iKEyfvqolr5JFBi9bx6YzXeAQu%2B4ljUnhkI6qyX2Paws0QjXwI2m5LZNzGatPerYZx173BRrzqjSqg%2FjDslXyQ9bKcz%2FiCbdjuacM%2BUW%2FjLXr1pJhZq1Es62AvVyKizVvRh6N9Jaeddr4q1K9U0MYJS6tDVRYGWgAml3VEN1ma7ECB%2FtqNKnun33Z9Fuwu%2FLy%2FXCXdikuhG9YZwjV9l9JzHoGMa4jnRQOIVs6IwsO%2BZo5fknT5b69SrJO0RB7UA2xXX0RaQhfHvM91fhlm7f4Zs24MGBLnLqrnfkh5X3pOphoPcxDPTB0TjD%2F2a4jvtYQ%2B0yGrMFW8yr%2FQeDYEwe).

### `vertices(points: number[][])`

Draw lines connecting vertices.

```js
import litecanvas from "litecanvas"
import pluginMoreShapes from "@litecanvas/plugin-more-shapes"

// example: draw a triangle
function draw() {
  cls(0)

  vertices([
    // X Y points
    [0, 128],
    [128, 128],
    [64, 0],
  ])

  // you should choose fill or/and stroke that vertices
  stroke(4)
  // or/and
  // fill(5)
}
```

### `oval(x, y, rx, ry, color)`

Draw a ellipse outline.

```js
import litecanvas from "litecanvas"
import pluginMoreShapes from "@litecanvas/plugin-more-shapes"

function draw() {
  cls(0)
  oval(100, 100, 32, 64, 4)
}
```

### `ovalfill(x, y, rx, ry, color)`

Draw a color-filled ellipse.

### `rpol(x, y, sides, radius, color)`

Draw a regular polygon outline.

```js
import litecanvas from "litecanvas"
import pluginMoreShapes from "@litecanvas/plugin-more-shapes"

function draw() {
  cls(0)
  rpol(100, 100, 5, 64, 4)
}
```

### `rpolfill(x, y, sides, radius, color)`

Draw a color-filled regular polygon.

### `star(x, y, tips, radius, color)`

Draw a star outline.

```js
import litecanvas from "litecanvas"
import pluginMoreShapes from "@litecanvas/plugin-more-shapes"

function draw() {
  cls(0)
  star(100, 100, 8, 64, 5)
}
```

### `starfill(x, y, tips, radius, color)`

Draw a color-filled star.
