class Rectangle{
  constructor(width, height,color)
  {
    this.width=width;
    this.height=height;
    this.color=color;
  }

  get calcArea() {
    return this.height*this.width;
  }

}


let rect=new Rectangle(4,5,'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea);
