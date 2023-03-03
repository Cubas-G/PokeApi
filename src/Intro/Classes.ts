// Un constructor es lo que se va a ejecutar primero d ela clase
import  axios  from "axios";
import { PokeAPIResponse, Move } from "../interfaces/pokeApiResponse.interface";




export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  // speack() {
  //   console.log(`${this.name.toUpperCase()}`); 
  // }

  // scream() {
  //   console.log(`${this.name.toLocaleLowerCase()}!!!`);	
  // }

 async getMoves(): Promise<Move[]> {
    // return 10;
    const {data} = await axios.get<PokeAPIResponse>("https://pokeapi.co/api/v2/pokemon/9");

    // console.log(data.moves[0].move.name);

    // console.log(`Hola Blastoyse, tu primer movimiento es:  ${data.moves[0].move.name}`);
    
    return data.moves;
    

  }
}

export const blastoise = new Pokemon (4, 'Blastoise')

// console.log(blastoise.getMoves());


export  class Human {
    constructor (public id: string, public name: string) {}
}


export class Poquemon {
    constructor(public id: number, public name: string) {}
}


export const charmander = new Pokemon (4, 'Charmander')

export const ash = new Human ("CO195", 'Ash')

export const pikachu = new Poquemon (10, 'Pikachu')


// blastoise.speack();
// blastoise.scream();
// charmander.speack();
