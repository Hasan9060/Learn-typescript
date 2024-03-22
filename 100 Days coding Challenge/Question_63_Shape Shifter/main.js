// Question : 63
// Function to describe a shape
function describeShape(shape) {
    if (shape.kind === "circle") {
        console.log("This is a circle with radius ".concat(shape.radius));
    }
    else if (shape.kind === "rectangle") {
        console.log("This is a rectangle with width ".concat(shape.width, " and height ").concat(shape.height));
    }
}
var myCircle = { kind: "circle", radius: 5 };
var myRectangle = { kind: "rectangle", width: 3, height: 4 };
describeShape(myCircle);
describeShape(myRectangle);
