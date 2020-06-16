import Polygon from './polygon.mjs';

class Square extends Polygon {
    constructor({ length }) {
        super({ width: length, height: length });

        this.name = 'Square';
    }

    get Area() {
        return this.height * this.width;
    }

    set Area(value) {
        this.area = value;
    }
}

export default Square;