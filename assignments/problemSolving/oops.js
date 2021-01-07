function Rectangle(height, width) {
  this.area = function () {
    return height * width;
  };
  this.perimeter = function () {
    return 2 * (height + width);
  };
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.distanceFrom = function (z) {
    return Math.sqrt(
      (this.x - z.x) * (this.x - z.x) + (this.y - z.y) * (this.y - z.y)
    );
  };
}