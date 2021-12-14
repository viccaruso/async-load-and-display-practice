export function renderPokemon(pokemon) {
    const nameEl = document.createElement('p');
    const primaryTypeEl = document.createElement('p');
    const secondaryTypeEl = document.createElement('p');
    const pokedexEl = document.createElement('p');
    const hrEl = document.createElement('hr');
    const container = document.createElement('div');

    nameEl.textContent = `Pokémon: ${pokemon.name}`;
    primaryTypeEl.textContent = `Type I: ${pokemon.primary_type}`;
    secondaryTypeEl.textContent = `Type II: ${pokemon.secondary_type}`;
    pokedexEl.textContent = `Pokédex Number: ${pokemon.id}`;

    container.classList.add('pokemon');
    container.append(nameEl, primaryTypeEl, secondaryTypeEl, pokedexEl, hrEl);

    return container;
}

export function renderMotorcycles(motorcycle) {
    const makeEl = document.createElement('p');
    const modelEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const displacementEl = document.createElement('p');
    const hrEl = document.createElement('hr');
    const container = document.createElement('div');

    makeEl.textContent = `Brand: ${motorcycle.make}`;
    modelEl.textContent = `Model: ${motorcycle.model}`;
    yearEl.textContent = `Year: ${motorcycle.year}`;
    displacementEl.textContent = `Engine: ${motorcycle.engine_cc}cc`;

    container.classList.add('motorcycle');
    container.append(makeEl, modelEl, yearEl, displacementEl, hrEl);

    return container;
}