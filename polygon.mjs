class Polygon {
    constructor({ width, heigth }) {
        this.name = 'Polygon';
        this.heigth = heigth;
        this.width = width;
    }

    getName() {
        return `Hi, I am a ${this.name}.`;
    }

}

export default Polygon;