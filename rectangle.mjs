import Polygon from './polygon.mjs';

export class Rectangle extends Polygon {
    constructor({ width, heigth }) {
        super({ width, heigth });

        this.name = 'Rectangle';
    }

    getName() {
        return super.getName();
    }
}