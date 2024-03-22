// Question : 63

/*Shape Shifter: Write a program that can describe either a circle or a rectangle using a 
special type alias, including properties unique to each shape.*/

type Shape = Circle | Rectangle;
interface Circle {
    kind: "circle";
    radius: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
// Function to describe a shape
function describeShape(shape: Shape): void {
    if (shape.kind === "circle") {
        console.log(`This is a circle with radius ${shape.radius}`);
    } else if (shape.kind === "rectangle") {
        console.log(`This is a rectangle with width ${shape.width} and height ${shape.height}`);
    }
}
const myCircle: Circle = { kind: "circle", radius: 5 };
const myRectangle: Rectangle = { kind: "rectangle", width: 3, height: 4 };

describeShape(myCircle);
describeShape(myRectangle);


 
  










