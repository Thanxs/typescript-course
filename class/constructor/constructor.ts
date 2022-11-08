class Person {
  name: string;
  age: number;

  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  constructor(nameOrAge?: string | number, age?: number) {
    if (typeof nameOrAge === 'string') {
      this.name = nameOrAge;
    }

    if (typeof nameOrAge === 'number') {
      this.age = nameOrAge;
    }

    if (typeof age === 'number') {
      this.age = age;
    }    
  }
}

const person = new Person('Alex');
const person2 = new Person();
const person3 = new Person(33);
const person4 = new Person('Demis', 24);

console.log(person);
console.log(person2);
console.log(person3);
console.log(person4);

function run(distance: string): void;
function run(distance: number): void;
function run(distance: string | number): void {
  console.log(distance);
}

run(21);
run('21');