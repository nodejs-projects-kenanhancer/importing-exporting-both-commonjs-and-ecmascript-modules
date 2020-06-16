import Polygon from './polygon.mjs';

export class Rectangle extends Polygon {
    constructor({ width, height }) {
        super({ width, height });

        this.name = 'Rectangle';
    }

    getName() {
        return super.getName();
    }
}