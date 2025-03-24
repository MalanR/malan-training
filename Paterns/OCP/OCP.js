// Open/Closed Principle

// Create a Shape Calculator that calculates the area of different shapes.

// Your initial implementation should support circles and squares.

// Then, extend it by adding support for triangles, without modifying the existing code.

class shapeClaculator {
    constructor() {
        this.shapes = [];
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    calculateTotalArea() {
        return this.shapes.reduce((acc, shape) => acc + shape.area(), 0);
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius * this.radius;
    }
}

class Squaure{
    constructor(side){
        this.side = side;
    }
    area(){
        return this.side * this.side;
    }
}

class Triangle{
    constructor(base, height){
        this.base = base;
        this.height = height;
    }
    area(){
        return 0.5 * this.base * this.height
    }
}


const caculations = new shapeClaculator();
caculations.addShape(new Circle(8));
caculations.addShape(new Squaure(6));
calculation.addShape(new Triangle(5,8));

console.log(calculations.calculateTotalArea());