import Polygon from './polygon.mjs';

class Square extends Polygon {
    constructor({ length }) {
        super({ width: length, heigth: length });

        this.name = 'Square';
    }

    get Area() {
        return this.heigth * this.width;
    }

    set Area(value) {
        this.area = value;
    }
}

export default Square;