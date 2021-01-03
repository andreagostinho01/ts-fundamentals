"use strict";
/*
    An interface is a syntactical contract that an entity should conform to.
    In other words, an interface defines the syntax that any entity must adhere to.

    Interfaces define properties, methods, and events, which are the members of
    the interface.
    Interfaces contain only the declaration of the members. It is the responsibility
    of the deriving class to define the members.
    It often helps in providing a standard structure that the deriving classes
    would follow.
*/
const me = {
    name: 'André',
    age: 19,
    speak(txt) {
        console.log(txt);
    }
};
me.speak('speaking something');
const greet = (person) => console.log(`Hello, ${person.name}`);
greet(me);
