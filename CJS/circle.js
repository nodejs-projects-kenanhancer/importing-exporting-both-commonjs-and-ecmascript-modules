const Shape = require('./shape.cjs');

const PI = 3.14159265359;

class Circle extends Shape {
    constructor({ radius }) {
        super({ width: 0, height: 0 });

        this.width = width;
        this.height = height;
        this.name = 'Circle';
    }

    area() {
        return (radius ** 2) * PI;
    }

    circumference() {
        return 2 * radius * PI;
    }
}

module.exports = Circle;