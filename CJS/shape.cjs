class Shape {
    constructor({ width, height }) {
        this.name = 'Shape';
        this.height = height;
        this.width = width;
    }

    getName() {
        return `Hi, I am a ${this.name}.`;
    }

}

module.exports = Shape;