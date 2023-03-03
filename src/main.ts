import './style.css'
import { pokemon, human } from './Intro/Objects';
import { blastoise } from './Intro/Classes';
import { pikachu } from './Intro/inyection';
import {poliwag } from './Intro/inyection2'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<h1>Hola ${blastoise.name} tu Id es igual a ${blastoise.id}  </h1>

<h2>Hola ${human.name} tu id es: ${human.id}</h2>

<h2>Hola ${pikachu.name} tu id es: ${pikachu.id}</h2>

<h2>Hola ${poliwag.name} tu id es: ${poliwag.id}</h2>

<h3>Hola </h3>
  
`;

document.querySelector<HTMLButtonElement>("#counter")!;

