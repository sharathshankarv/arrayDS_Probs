class Rectangle{
    constructor(w,h){
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = () => {
    debugger
    console.log(this.w, this.h);
}

class Square extends Rectangle{
    constructor(w){
        super(w, w);
    }
}

Square.prototype.area = () => {
    return this.w * this.w;
}

let rec = new Rectangle(3,4);
let squ = new Square (3);

console.log(rec.area());
console.log(squ.area());
