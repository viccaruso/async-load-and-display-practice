// import functions and grab DOM elements
import { getAllMotorcycles, getAllPokemon } from './fetch-utils.js';
import { renderMotorcycles, renderPokemon } from './render-utils.js';

const pokemonDivEl = document.querySelector('#pokemon-div');
const motorcyclesDivEl = document.querySelector('#motorcycles-div');
// let state


window.addEventListener('load', async() => {
    const allPokemon = await getAllPokemon();
    const allMotorcycles = await getAllMotorcycles();

    for (let pokemon of allPokemon) {
        const pokemonEl = renderPokemon(pokemon);
        pokemonDivEl.append(pokemonEl);
    }

    for (let moto of allMotorcycles) {
        const motoEl = renderMotorcycles(moto);
        motorcyclesDivEl.append(motoEl);
    }
});
// set event listeners
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
