class Polygon {
    constructor({ width, height }) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }

    getName() {
        return `Hi, I am a ${this.name}.`;
    }

}

export default Polygon;