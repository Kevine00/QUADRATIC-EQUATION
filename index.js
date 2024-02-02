function solveQuadratic(a, b, c) {
   
    var delta= b * b - 4 * a * c;

   
    if (delta >= 0) {
        
        var root1 = (-b + Math.sqrt(delta)) / (2 * a);
        var root2 = (-b - Math.sqrt(delta)) / (2 * a);

       
        console.log("Root 1: " + root1);
        console.log("Root 2: " + root2);
    } else {
       
        console.log("The roots are complex numbers.");
    }
}

// Example 
var a = 4;
var b = -9;
var c = 4;

solveQuadratic(a, b, c);
