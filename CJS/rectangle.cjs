const Shape = require('./shape.cjs');

class Rectangle extends Shape {
    constructor({ width, height }) {
        super({ width, height });

        this.width = width;
        this.height = height;
        this.name = 'Rectangle';
    }

    getName() {
        return super.getName();
    }
}

module.exports = Rectangle;