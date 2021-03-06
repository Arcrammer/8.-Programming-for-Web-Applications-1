/*
    PWA1: Goal 4: Course Material 4

	1. Objects
	2. Document Object Model
	3. Events and Callbacks
*/

// application scope (self-executing function)
(function(){


/*	==================================================================
	Objects
	------------------------------------------------------------------
		
	- objects are collections of keys and values for storing data {KEY : Value} pairings, also 
		known as associative pairing
 
	- arrays and objects are both used to store multiple values 
		arrays vs objects:  
 			1.  arrays store by numerical index
 			2.  objects store by a key index
	
	- keys in objects are names (similar to variables), used to index a value inside the object

	-similar to making an array, we declare the object’s properties inside the literal, separating by comma...
*/
console.log('------Objects ----------');

//{KEY : Value} pairings,

// Traditional JavaScript objects are declared using no quotations or apostrophe's to surround the key value, and they can hold any data type, including functions
var traditionalPersonObject = {
	name: "Alexander Rhett Crammer",
	age: 18,
	secretAgent: false
};

// JSON objects are declared by surrounding the key values with double quotes, and they can hold only the six data types: array, integer, string, object, null, boolean
var JSONPersonObject = {
	"name": "Alexander Rhett Crammer",
	"age": 18,
	"secretAgent": false
};

/* accessing object properties
     - below are 3 ways you can access the property information in an object
         1. dot notation
         2. index notation using a variable as the index
         3. index notation using a string

     - also keep in mind that since the keys can be strings, you could access the keys using string variables
 */

console.log(traditionalPersonObject.age + " -- Traditional JavaScript using dot notation");
console.log(JSONPersonObject.age + " -- JSON using dot notation");
console.log("\n");
var ageKeyStringValue = "age";
console.log(traditionalPersonObject[ageKeyStringValue] + " -- Traditional JavaScript using a variable and index notation");
console.log(JSONPersonObject[ageKeyStringValue] + " -- JSON using a variable and index notation");
console.log("\n");
console.log(traditionalPersonObject["age"] + " -- Traditional JavaScript using a string and index notation");
console.log(JSONPersonObject["age"] + " -- JSON using a string and index notation");
console.log("\n");

// setter

traditionalPersonObject.name = "Armani"; // Reassigning the value of the 'name' property
JSONPersonObject.name = "Armani"; // Reassigning the value of the 'name' property
traditionalPersonObject.favouriteCity = "New York"; // Creating a new property
JSONPersonObject.favouriteCity = "New York"; // Creating a new property

console.log(traditionalPersonObject);
console.log(JSONPersonObject);
console.log("\n");

//nested objects

traditionalPersonObject = {
	dob: {
		month: "December",
		day: 27,
		year: 1995
	}
};
JSONPersonObject = {
	"dob": {
		"month": "December",
		"day": 27,
		"year": 1995
	}
};

console.log(traditionalPersonObject.dob);
console.log(JSONPersonObject.dob);
console.log("\n");
console.log(traditionalPersonObject.dob["month"]);
console.log(JSONPersonObject.dob["month"]);
console.log("\n");
console.log(traditionalPersonObject.dob.month);
console.log(JSONPersonObject.dob.month);
console.log("\n");

//---------------------------------------------

// Object within an object

console.log('------Object within an object, Arrays, Function ----------');

// Creating a traditional JavaScript object to reserve the ability to create functions
var thatGuy = {
	name: "Alexander Rhett Crammer",
	course: "Programming for Web Fundamentals 1",
	address: {
		street: "3300 University Boulevard",
		city: "Winter Park",
		state: "Florida",
		intersection: ["University","Semoran"]
	},
	displayMyAddress: function() {
		var addressAsString = this.address.street + "\n" + this.address.city + ", " + this.address.state + "\nAt the intersection of \"" + this.address.intersection[0] + "\" and \"" + this.address.intersection[1] + "\".";
		return addressAsString;
	}
};

console.log(thatGuy.displayMyAddress());
console.log("\n");
console.log(thatGuy.address.street + ", " + thatGuy.address.city + ".");
console.log("\n");

//properties & methods
/*
	- objects are useful primarily for properties and methods:
		- properties are variable/keys that belong to an object only
		- methods are function/keys that belong to the object only 
		= these members are the foundation of an oop model
*/

console.log('------Objects - properties & methods ----------');

//Method 1 "Basic"

var fsStudent = {};
fsStudent.age = 18;
fsStudent.career = "Web Developer";
fsStudent.sayHello = function() {
	console.log("Hello!");
}

fsStudent.sayHello();
fsStudent["sayHello"]();
console.log("\n");
console.log(fsStudent.age);
console.log(fsStudent["age"]);
console.log("\n");

// above, we first initialize the object, then we created 2 properties 
//   for the object, and a method called sayHello - notice that the method is 
//	 being created by an assignment operator, just like the properties.

// we can also access the methods and properties of an object using  [ ] , 
// 	by using their name as a string - all of the below are valid:

/* --------------
Method 2 "OBJECT Literal"

	- we can also use the object literal syntax to create a new object and 
		fill it at the same time.

	- below is the same object as in Method 1
*/

var fsStudent = {
	age: 18,
	career: "Web Development",
	sayHello: function() {
		console.log("Hello, world!");
	}
};

//---------------------------------------------


/******************************************************************************
STUDENT ACTIVITY 1:

	PART 1:
	1.  Create an object that has the following keys.
         a. schoolName (i.e "Full Sail")
         b. address  (i.e "123 University Ave")
         c. studentCount (i.e 16000)
         d. students (use an array of objects) - create at least 3 objects in the array)
             i. name (i.e "James Bond")
             ii. GPA (i.e 3.9)
             iii. classes (use an array with the ability to store at least 2 class names)
                    (i.e ['PWA1', 'PWA2'])

        2.	console.log the following
             a. school name in both the dot syntax and index syntax
             b  create a variable name "newCnt" that is equal to studentCount, and console.log
                    the studentCount using the newCnt variable.
             c.  console.log the address using index syntax
             d. one student's GPA using dot syntax and index syntax
 ----------------------------------------------------------------------------- */

console.log('------ STUDENT ACTIVITY - ANSWERS BELOW ----------');

// this is integrating multiple data types - object with an array of objects

var universityInformation = {
	schoolName: "Full Sail University",
	address: "3300 University Boulevard",
	studentCount: 16000,
	students: [{
		name: "Alexander Rhett Crammer",
		GPA: 3.7,
		classes: ["Programming for Web Applications 1","Programming for Web Applications 2"]
	},{
		name: "Someone Else",
		GPA: 3.9,
		classes: ["Programming for Web Applications 1","Programming for Web Applications 2"]
	}]
};

console.log(universityInformation.schoolName);
console.log(universityInformation["schoolName"]);
var newCnt = universityInformation.studentCount;
console.log(newCnt);
var studentCountString = "studentCount";
console.log(universityInformation[studentCountString]);
console.log(universityInformation["address"]);
console.log(universityInformation.students[0].GPA);
console.log(universityInformation["students"][0]["GPA"]);
console.log("\n");

/* ----------------------------------------------------------------------------
 STUDENT ACTIVITY 2:

    1.  Using the above code, create a function that will find the average grade
        a. create an anonymous function named "gradeAvg"
        b. the function should accept as a parameter the object above
        c. create a for loop to total up the average grade for ALL students
        d. "return" the average GPA answer to the item that called the function

    2.  console.log the average grade by calling the gradeAvg method.
----------------------------------------------------------------------------- */

var gradeAvg = function(universityInformationObject) {
	var count = total = 0;
	for(var i=0; i < universityInformationObject.students.length;i++) {
		count++;
		total = total + universityInformationObject.students[i].GPA;
	}	
	return total / count; // Returns the average
};

console.log("Average GPA: " + gradeAvg(universityInformation));

/* ===============================================================
	The for-in object loop
------------------------------------------------------------------	

	for(var key in obj){
		obj[key]
	}
*/
    console.log("---------- Object - For In Loop ----------------");

var student = {
	name: "James Bond",
	gender: "Male",
	job: "Web Developer"
};

for(var key in student) {
	console.log("Key: " + key);
	console.log("Value: " + student[key]);
};

/*
	===============================================
	MORE Object infomation
	
		- most strictly-typed languages have clear separations in their data types 
			and classical behavior

		- JavaScript is simpler:
			- numbers, strings, and booleans are the only separate data types in JavaScript
			- objects, arrays, regular expressions, and functions are all considered 
				to be objects.
			- in addition, anything that is not an object, acts like an object

			i.e.   "Literal Syntax"
			myStr = ‘James Bond’;
			alert(myStr.length)   //will return a 10


			- previously, we used the most common constructor for creating our 
				variables, which is the literal syntax:

				var myNum = 5;

			- we could also create this variable using its "constructor" equivalent:
	
				var myNum = new Number(5);

			- both have the same result - the literal syntax is preferable	

			- using these constructors, we can also convert from one data type to another.
*/
    console.log('------ Objects - Converting Datatypes ----------');

var myNum = 1;
var myString = String(myNum);
var myBoolean = Boolean(myString);

console.log("'myNum' was converted to an integer");
console.log("'myString' is the type of: " + typeof myString + "\nWith a value of: " + myString);
console.log("'myString' was converted to an integer");
console.log("'myBoolean' is the type of: " + typeof myBoolean + "\nWith a value of: " + myBoolean);
console.log("\n");

/*
	- because these values act as objects, the data types also have methods and 
		properties, just like an object...  
	- we’ve already looked at one, the .length property, which can be used on 
		both strings and arrays.
*/

// #1 - shows string length
var someVariable = "omg lololol";
console.log(someVariable.length); // Logs the 'length' property of the string object to the console

// #2 - shows array length
var myArray = [1,2,3,4,5,6];
console.log(myArray.length); // Logs the 'length' property of the array object to the console

// #3 - shows and array of objects, inside of an object length
console.log(universityInformation.students.length); // Logs an integer to represent the amount of objects within the 'students' property (containing an array of two objects) to the console

console.log('------ MORE Object examples - Objects/Functions ----------');

// showing a function call and creating a method

// Creating an object to return a class containing a method
var fn = function(name,course) {
	return {
		sayHi: function() {
			console.log("My name is " + name + ", and I am currently attending the course \'" + course + "\'.");
		}
	}
};

fn("James Bond","Programming for Web Applications 1").sayHi();
console.log("\n");

/*
	==================================================================
	DOCUMENT OBJECT MODEL
	------------------------------------------------------------------

	document	// global DOM object
	window		// global DOM object
*/
console.log('------------ DOCUMENT OBJECT MODEL -------------------');

//Window DOM object
/*
 console.log(window);
 console.log(window.location);
 console.log(window.history);
 console.log(window.navigator);

 //Document DOM object
 console.log(document);
 console.log(document.body);
 console.log(document.head);
 */


/*
	==================================================================
	document.getElementById(string);
	------------------------------------------------------------------
	- Finds an html element on the page by it's CSS ID.
	- RETURNS a single DOM object.
	- Requires a string. 
	- If there are more than 1 id, it returns the first.

	------------------------------------------------------------------
	BEST PRACTICE:
	
	- Save the html element to a variable for later reference.
	- Code shouldn't repeat itself. Code shouldn't repeat itself.
*/

console.log('------------ getElementById -------------------');




/*
	==================================================================
	document.getElementsByTagName(string);
	------------------------------------------------------------------
	- Finds all html elements on the page with a matching html tag
	- RETURNS an array (collection) of DOM objects.
*/

console.log('------------ getElementsByTagName -------------------');




/*
	==================================================================
	document.querySelectorAll(string);
	------------------------------------------------------------------
		- Uses a CSS selector expression to find all html elements that match the expression.
		- Works much like stylesheet declarations (class and ID prefixes)

		- RETURNS an array (collection) of DOM objects. Even if there is 1 object.
			versus the getElementByID (that returns a single DOM element)
*/

console.log('------------ querySelectorAll -------------------');




/*
	==================================================================
	document.querySelector(string);
	------------------------------------------------------------------
		- Works just like querySelectorAll, but only returns the first match,
			If multiple exist, return the first
		
		- RETURNS a single DOM object.
*/
    console.log('------------ querySelector -------------------');





    /*
        ==================================================================
        TRAVERSAL
        ------------------------------------------------------------------
            - "Traversing" means finding other html elements from already selected
                element(s)
            - We use XML nodes for traversing

        Traversing works by parent/child/sibling relationships:

            - firstChild
            - lastChild
            - parentNode
            - nextSibling
            - previousSibling
            - childNodes

        Will be used in ALL future assignments.
    */
    console.log('------------ TRAVERSAL -------------------');




/*
	==================================================================
	Manipulating Attributes
	------------------------------------------------------------------
		- HTML elements have attributes, things like "href", "src", "title", etc
		- To access these attributes, there are specific setter/getter methods.

        Syntax:
        - element.setAttribute(attr, value)
            - always initializes an attribute to a new value
        - element.getAttribute(attr)
            - always returns a string

        attr = href, src, class
*/



/*
	==================================================================
	Manipulating CSS Classes
	------------------------------------------------------------------
		- If you use setAttribute to change the "class" attribute of an element,
			that element is immediately redrawn with the new css styles.
		
		- Just like normal, you can set MULTIPLE classes at once.
		
			element.setAttribute('class', 'thumb active')

		- FYI: Elements can have multiple classes.
*/

console.log('------------ Manipulating CSS Classes -------------------');


/*
	==================================================================
	Replacing an HTML container with new HTML
	------------------------------------------------------------------
		- In a later project, you are building a gallery. 
		- You will be targeting the SCR of an image tag.
		- See contentPreview in HTML

Sample Link: http://www.instructables.com/files/deriv/FJI/WGSW/FPIUQQ3K/FJIWGSWFPIUQQ3K.MEDIUM.jpg
*/



/*
	==================================================================
	DOM Events  (lecture slides)
	------------------------------------------------------------------
		- listener and handler
		- there are 2 key aspects to any event, the event listener and the event handler
			1. the event listener is an property associated with the DOM that waits for the event trigger to 
				occur (i.e click, mouseover), and then fires the event handler
			2. the event handler is the function that will execute when the event is fired

		- using dot syntax, the listener for any element is available as a property 

		- An event listener is all lowercase with the prefix "on"
		
			element.onclick		//click listener
			element.onmousemove			//mousemove listener
	

		- The function is the event handler.  Can be anonymous or named.

			elementObj.onclick = myFn;
			element.onclick = function(){};

		- every event listener automatically passes an "event" object with information about the event  
		- the function's only argument is the EVENT OBJECT (e)
		- the handler must receive it as an argument
		- many developers will use the "e" as the function parameter
		- The function's CONTEXT (this) is the html element.	
*/
console.log('------------ DOM Events Ex 1-------------------');

var nav = document.querySelectorAll('#nav li a');


/*
// this just console.log's when a click occurs





*/


/*
	==================================================================
	Browser Defaults
	------------------------------------------------------------------
		- for most events, the browser will trigger a default action -  for example, hovering over 
			any element will create a tooltip out of the “title” or “alt” attribute if it exists

		- the one we care the most about is the <a> default action, which tells the window to go to 
			the anchor’s href location

		- the window waits for a return to take place before calling the default
			- so our event function should always return false , and call preventDefault()

		e.stopPropagation();  - calling this method from inside an event handler will prevent the 
								Bubbling Phase from triggering other events

		e.preventDefault();	  - calling this method from inside an event handler will prevent the 
								browser’s default action (such as following an href or the <form> action)
								- Prevent a submit button from submitting a form
   								- Prevent a link from following the URL
					

*/


console.log('------------ DOM Events Ex 2 -------------------');
/*
// this example changes the clicked link to the active class




*/ 



console.log('------------ DOM Events Ex 3 -------------------');
/*
// a more efficient way to do the above





*/


})(); // end wrapper