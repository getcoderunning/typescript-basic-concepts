//ANCHOR Sample types
    // let example1: boolean = true;
    // let example2: number = 35;
    // let example3: string = "Hello World";

//ANCHOR Multiple Types
    // let example4: boolean | number = 35;

//ANCHOR Implicit vs Explicit typing
    //Explicit typing
        // let example5: number;
        // example5 = 35;
        //const arrayExample number[] = [1, 3, 4, 5];
    //Implicit Typing
        //const arrayExample = [1, 3, 4, 5];

//ANCHOR Checking Types
    // import {Bear} from './bear.model';

    // const bear = new Bear(3);

    // if(bear instanceof Bear) {
    //     console.log("Hello from Bear!");
    // }

//ANCHOR Type Assertions
    // let definitelyNoAString: any = 'I am a string';

    //Approach 1 - casting
    //let strLength = (definitelyNoAString as string).length;

    //Approach 2 - using alligator syntax
    // let strLength = (<string>definitelyNoAString).length;

//ANCHOR TypeScript Arrays
    // const example1: string[] = ["Hello World"];

    // const example2: number[] = [1,2];

    // const example3: boolean[] = [true, false];

    // 2 types in 1 array
    // const example4: (number | boolean)[] = [1,2,true];

    // multi-dimensional arrays
    // const example5: boolean[][] = [ [true, false] ];

//ANCHOR TypeScript Tuples
    // const exampleTuple: [string, number] = ["https://github.com/getcoderunning", 30];

//ANCHOR TypeScript Enums
    // import {Age} from './age.enum';
    // import {Names} from './name.enum';

    // function totalAge(age1: Age, age2: Age){
    //     return age1 + age2;
    // }

//ANCHOR TypeScript Objects
    //what can be assigned
        // const example1: object = undefined;
        // const example4: object = {};
        // const example5: object = [];

    //what can be assigned
        // const example2: Object = undefined;
        // const example6: Object = NaN;
        // const example7: Object = {};
        // const example8: Object = [];

    // {} - denotes to be an empty object, this empty object cannot be assigned with propoerties
    //what can be assigned
        // const example3: {} = undefined;
        // const example9: {} = {};

//ANCHOR TypeScript Parameters
    // import {Person} from './person.model';

    // function add(val1: number, val2: number) {
    //     return val1 + val2;
    // }

    // add(1,2);

    // function sayHello(person: Person) {
    //     return `Say Hello tomy friend, ${person.firstName}!`;
    // }

    // sayHello(new Person({firstName: "Christian"}));

//ANCHOR TypeScript Return Types
    // import {Person} from './person.model';

    // function add(val1: number, val2: number): number {
    //     return val1 + val2;
    // }

    // function sayHello(person: Person): string {
    //     return `Say Hello tomy friend, ${person.firstName}!`;
    // }

    // function voidExample(): void {
    //     add(1,2);
    // }

    // function neverExample(): never {
    //     throw Error;
    // }

//ANCHOR TypeScript Custom Types
    // use type in local type
    // type person = {firstName: strings};

    // const example1: object = undefined;

    // const example2: Object = NaN;

    // const example3: person ={firstName: "Handsome"};

    // example1.firstName = "Christian";

//ANCHOR TypeScript Interfaces
    // import {Person} from './person.interfaces'

    //without interface
    //const example1: person = {firstName: "Pogi"};

    //with interface
    // const example1: Person = {firstName: "Juan", middleName: "Dela", lastName: "Cruz"};

    // example1.firstName = "Christian";
    // example1.middleName = "Coding God";
    // example1.LastName = "Bailon";

//ANCHOR TypeScript Barrels
    // import {Bear, Man, Pig} from './interfaces/index';

//ANCHOR TypeScript Models
    // import {Person} from './person.model';

    // const example1: Person = new Person(
    //     {firstName: 'Ace', middleName: 'Pangit', lastName: 'Bailon'}
    // );

    // example1.firstName = 'Christian';
    // example1.middleName = 'Coding God';
    // example1.lastName = 'Bailon';

//ANCHOR TypeScript Intersection Types
    // import {Bear, Man, Pig} from './interfaces/index';

    // let man: Man | Pig;
    // let bear: Bear;
    // let pig: Pig;

    //another approach of assigning types
    //type ManBearPig = Bear & Man & Pig;
    //let manBearPig: ManBearPig;

    // let manBearPig: Bear & Man & Pig;
    // manBearPig.firstName = "Christian";
    // manBearPig.claws = 3;
    // manBearPig.bacon = false;

//ANCHOR TypeScript Generics
// function example<T>(arg:T): T {
//     return arg;
// }

// example(5);

//returning T as array
// function example<T>(arg:T[]): T[] {
//     return arg;
// }

// example([4]);

//ANCHOR TypeScript Access Modifiers
import {Bear} from './bear.model';
import { Animal } from './animal.model';
//by default types are public
//add protected to animal model types and constructor

//const bear = new Bear();
//const animal = new Animal({type: bear});

const bear = new Bear({name: "Omega", tail: true});
bear.claws = 3;
bear.add(2,3);
