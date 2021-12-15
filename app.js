// import functions and grab DOM elements
import { getAllDogs, getAllMotorcycles, getAllPokemon, getAllPresidents } from './fetch-utils.js';
import { renderDog, renderMotorcycle, renderPokemon, renderPresident } from './render-utils.js';

const pokemonDivEl = document.querySelector('#pokemon-div');
const motorcyclesDivEl = document.querySelector('#motorcycles-div');
const dogsDivEl = document.querySelector('#dogs-div');
const presidentsDivEl = document.querySelector('#presidents-div');
// let state


window.addEventListener('load', async() => {
    const allPokemon = await getAllPokemon();
    const allMotorcycles = await getAllMotorcycles();
    const allDogs = await getAllDogs();
    const allPresidents = await getAllPresidents();

    for (let pokemon of allPokemon) {
        const pokemonEl = renderPokemon(pokemon);
        pokemonDivEl.append(pokemonEl);
    }

    for (let moto of allMotorcycles) {
        const motoEl = renderMotorcycle(moto);
        motorcyclesDivEl.append(motoEl);
    }

    for (let dog of allDogs) {
        const dogEl = renderDog(dog);
        dogsDivEl.append(dogEl);
    }

    for (let president of allPresidents) {
        const presidentEl = renderPresident(president);
        presidentsDivEl.append(presidentEl);
    }
});

