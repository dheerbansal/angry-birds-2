class Box extends baseClass {
  constructor(x, y, width, height) {
    super(x,y,50,50)
    this.image = loadImage("sprites/wood1.png")
}
  display(){
    super.display();
  }
};
