import {PokeAPIResponse, Type } from '../interfaces/pokeApiResponse.interface';
import { PokeApiAdapter2 } from "./PokeApi.adapter2";

export class PokemonAdapte2 {
  constructor(
    public name: string,
    public readonly id: number,


    // Inyeccion de dependencia
    private http: PokeApiAdapter2
    
  ) {}
  
  

  async getTipos(): Promise<Type[]> {
    const data = await this.http.get<PokeAPIResponse>
    ("https://pokeapi.co/api/v2/pokemon/60");
    console.log(data)
    console.log(`Hola yo soy${poliwag.name} y soy un pokemon de: ${data.types[0].type.name} `);
    
    return data. types;
  }
}

const PokeApi = new PokeApiAdapter2();


export const poliwag = new PokemonAdapte2("poliwag", 60, PokeApi);

console.log(poliwag.getTipos());

