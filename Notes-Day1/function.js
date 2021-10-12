/*          -------------JavaScript Functions---------------
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).


Ways of defining a function
1..... function nameOfTheFunction(){

}

2.....Expression
const constvalue= function(){

}

3......
*/

function calF(){
    const myAcademiJourney={
        associate:2019,
        bachelor:2021,
        school:'Bellevue College',
        city:function(){
            state:'WA'
            return 'I got my associate in '+ ' ' + this.associate;
        }
    }
    }
    
    //Ways of defining a function
    //1.....Normal 
     function nameOfTheFunction(){
    
    }
    
    //2.....Expression
    const constvalue= function(){
    
    }
    
    /***************The Function() Constructor
    As you have seen in the previous examples, JavaScript functions are defined with the function keyword.
    
    Functions can also be defined with a built-in JavaScript function constructor called Function().*/
    const myFunction = new Function("a", "b", "return a * b");
    
    let x = myFunction(4, 3);
    /*output:JavaScript has an built-in function constructor.
    12*/
    
    //You actually don't have to use the function constructor. The example above is the same as writing:
    
    Example
    const myFunction = function (a, b) {return a * b};
    
    let x = myFunction(4, 3);
    
    
    /*<p>*****************Functions can be invoked automatically without being called:</p>
    
    <p id="demo"></p>*/
    
    (function () {
      document.getElementById("demo").innerHTML = "Hello! I called myself";
    })();// calling the function itself
    
    
    /********************Functions Can Be Used as Values
    JavaScript functions can be used as values:
    
    Example*/
    function myFunction(a, b) {
      return a * b;
    }
    
    let x = myFunction(4, 3);


/**************Arrow functions allows a short syntax for writing function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.*/

Example
// ES5
var x = function(x, y) {
  return x * y;
}

// ES6
const x = (x, y) => x * y;

// It is better to keep the curly brases
const x = (x, y) => { return x * y };

/**********************The Global Object
When a function is called without an owner object, the value of this becomes the global object.

In a web browser the global object is the browser window.

This example returns the window object as the value of this:

Example*/
let x = myFunction();            // x will be the window object

function myFunction() {
  return this;
}


/******************Invoking a Function as a Method
In JavaScript you can define functions as object methods.

The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):

Example*/
const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
myObject.fullName();         // Will return "John Doe"




/***********************Invoking a Function with a Function Constructor
If a function invocation is preceded with the new keyword, it is a constructor invocation.

It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:

Example*/
// This is a function constructor:
function myyFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

// This creates a new object
const myObj = new myyFunction("John", "Doe");

// This will return "John"
myObj.firstName;





/*************************The JavaScript call() Method
The call() method is a predefined JavaScript method.

It can be used to invoke (call) a method with an owner object as an argument (parameter).

With call(), an object can use a method belonging to another object.

This example calls the fullName method of person, using it on person1:

Example*/
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);//can use the object .call



// The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.


/****************************The JavaScript apply() Method
The apply() method is similar to the call() method (previous chapter).

In this example the fullName method of person is applied on person1:

Example*/
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "Mary Doe":
person.fullName.apply(person1);








/***********************The apply() Method with Arguments
The apply() method accepts arguments in an array:

Example*/
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);//call as an array with "applys"

/*Compared with the call() method:

Example*/
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");// Do not need to call the method as ann array
