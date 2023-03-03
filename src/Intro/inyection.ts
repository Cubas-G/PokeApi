import { Ability, PokeAPIResponse } from '../interfaces/pokeApiResponse.interface';
import { PokeApiAdapter } from "./PokeApi.adapter";

export class PokemonAdapter {
  constructor(
    public name: string,
    public readonly id: number,


    // Inyeccion de dependencia
    private http: PokeApiAdapter
    
  ) {}
  
  

  async getHabilidades(): Promise<Ability[]> {
    const data = await this.http.get<PokeAPIResponse>
    ("https://pokeapi.co/api/v2/pokemon/25");
    console.log(data)
    console.log(`Hola ${pikachu.name} Mi primer Movimiento es: ${data.abilities[1].ability.name} `);
    
    return data.abilities;
  }
}

const PokeApi = new PokeApiAdapter();


export const pikachu = new PokemonAdapter("pikachu", 25, PokeApi);

console.log(pikachu.getHabilidades());

