export {}

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person: [string, number] = ['Roland', 63];

enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Roland';

/*let myVariable: unknown = 10;
(myVariable as string).toUpperCase();*/

/* -- */

function addNumber(a: number, b: number): number {
    return a + b;
}

var sum: number = addNumber(10, 15)

console.log('Summe ist jetzt2: ' + sum);

/* -- */
function fullName(person: {firstname: string, lastname: string}) {
    console.log(`${person.firstname} ${person.lastname}`);
}

interface Person{
    firstname: string;
    lastname?: string;
}

function fullName2(person: Person) {
    console.log(`${person.firstname} ${person.lastname}`);
}

let p = {
    firstname: 'roland',
    lastname: 'kruggel'
};

let p2 = {
    firstname: 'roland'
};

fullName(p);
fullName2(p);


