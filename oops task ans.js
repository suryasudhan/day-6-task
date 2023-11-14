
// 1..q.class-movie

//a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
//  a String representing the studio, and a String representing the rating as its arguments, and sets the respective 
//  class properties to these values.

// b. The constructor for the class Movie will set the class property rating to "PG"
// as default when no rating is provided.
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    // c. Write a method getPG, which takes an array of base type Movie as its argument,
    //  and returns a new array of only those movies in the input array with a rating of "PG".
    //  You may assume the input array is full of Movie instances.The returned array need not be full.
    
     static getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
}
}
// d. Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

     const movie = new Movie("Casino Royale", "Eon Productions", "PG-13");


// 2..q. circle

var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = 1.0;
        this.color = "Red";
        if (typeof (radius) !== "undefined") {
            this.radius = radius;
        }
        if (typeof (color) !== "undefined") {
            this.color = color;
        }
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.toString = function () {
        return "Radius: " + this.radius + " Color: " + this.color;
    };
    Circle.prototype.getArea = function () {
        return (2 * (Math.PI) * this.radius);
    };
    Circle.prototype.getCircumference = function () {
        return (2 * this.radius);
    };
    return Circle;
}());
var c1 = new Circle();
console.log("Constructor with no params: " + c1.toString());
var c2 = new Circle(3.5);
console.log("Constructor with one param: " + c2.toString());
var c3 = new Circle(2.2, 'Yellow');
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());



// 3..q.Write a “person” class to hold all the details.

class Person {
  constructor(
    firstName = 'surya',
    lastName = 'sudhan',
    age = 23,
    country = 'india',
    city = 'Hosur'
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person1 = new Person() // it will take the default values
const person2 = new Person('madhu', 'sudhan', 20, 'india', 'cbe')

console.log(person1)
console.log(person2)



// 4...q.calculate the uber price
class Uberprice {
    constructor(kilometer, basePrice = 50) {
        this.kilometer = kilometer;
        this.basePrice = basePrice;
    }
    get price() {
        return this.kilometer * this.basePrice;
    }
}
var uber1 = new Uberprice(5);
var uber2 = new Uberprice(5, 125);
console.log(uber1.price);
console.log(uber2.price);
