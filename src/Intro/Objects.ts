import { name } from './typescript';
// export const studentIds = [3, 4, 5, 6];


// Objetos literales 

export  const pokemon = {
    id:  1,
    name:  "Charizard",

};

export  const human = {
    id:  "1020304050",
    name:  "Turista",

};

// Interfaces

interface Pokemon{
    id: number;
    name: string;
}

export const charmander: Pokemon = {
    id: 12700908,
    name: "charmander",
}
console.log(charmander);


interface Human {
    id: string;
    name: string;
    age: number;
}

export const misty: Human = {
    id: "C3456",
    name: "Misty",
    age: 15,
};


console.log(pokemon);
console.log(human);




