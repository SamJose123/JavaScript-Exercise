var x=5;
console.log(x);

// variable type string
var name ='Samantha Joseph';

// console shows name
// concat (strings with variable)
console.log ('My name is '+ name);

var name = 'Sally';
var count = 3;
var pets = 'dogs';
var country = 'America';
console.log('My name is '+ name + ' and own ' +  count  +  pets + ' and I live in '+ country );


// declare a variable
// var myName = 'Samantha';
// var sayHello = 'Hi my name is ' + myName;



// basic function and onclick event
document.getElementById('btn').onclick = function () {

    // grab input value
    var myName = document.getElementById('name').value;
    
    if (myName) {

    // create my sentence
    var sayHello = 'Hi my name is ' + myName;

    // targeting an element is HTML
    document.getElementById('hello').innerHTML = sayHello;

    } else {
        alert('You forgot to enter your name fool!')
    }
}








 
