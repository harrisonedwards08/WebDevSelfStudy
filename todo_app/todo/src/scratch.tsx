import React from 'react';
import './App.css';



let name: string = 'harry';

// union allows for either type
let age: number | string;
let isSmart: boolean = true;
let hobbies: string[] = ['climbing', 'coding','cooking'];

//takes any type, recommended instead of any
let specialCode: unknown;


//one method of declaring a function
function printName(name:string){
  console.log(name);

}

// return type void returns void, never returns literally nothing
// below can return any type
let printAge: (age: number) => any;



//object type
type Person = {
  name: string;
  age: number;
}


//interface for object initialization
interface Person2 {
  name: string;
  age: number;
}

//interface inheritance. can extend types with same syntax
interface Crusher extends Person2{
  isCrusher: boolean;
  //optional property
  climbs9a?: boolean;
}

let thsidude: Crusher = {
  
  name: 'harry',
  age: 23,
  isCrusher: true,

}



// a version of inheritance. dog can't be initialized without isStrong and legs
// can extend interfaces with same syntax
type Animal = {
  legs: number;
  isStrong: boolean;
}

type Dog = Animal &{
  name: string;
}

let dog: Dog = {
  legs: 4,
  isStrong: true,
  name: 'satan'
}





let people: Person[];