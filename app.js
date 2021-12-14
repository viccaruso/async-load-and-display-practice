// import functions and grab DOM elements
import { getAllPokemon } from './fetch-utils.js';
import { renderPokemon } from './render-utils.js';

const pokemonDivEl = document.querySelector('#pokemon-div');

// let state


window.addEventListener('load', async() => {
    const allPokemon = await getAllPokemon();
    console.log(allPokemon);
    for (let pokemon of allPokemon) {
        const pokemonEl = renderPokemon(pokemon);
        console.log(pokemonEl.outerHTML);
        pokemonDivEl.append(pokemonEl);
    }
});
// set event listeners
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
