class Circle{
  constructor(radius) {
    this.radius=radius;
  }
  get diameter(){
    return this.radius*2;
  }
  set diameter(_value){
    this.radius=_value/2;
  }
  get area(){
    return 2 * Math.PI * this.radius;
  }

}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
