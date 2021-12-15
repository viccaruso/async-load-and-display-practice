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

export function renderMotorcycle(motorcycle) {
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

export function renderDog(dog) {
    const nameEl = document.createElement('p');
    const numOfLegsEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const favToyEl = document.createElement('p');
    const hrEl = document.createElement('hr');
    const container = document.createElement('div');

    nameEl.textContent = `Name: ${dog.name}`;
    numOfLegsEl.textContent = `Number of Legs: ${dog.legs}`;
    colorEl.textContent = `Color(s): ${dog.color}`;
    favToyEl.textContent = `Favorite Toy: ${dog.fav_toy}`;

    container.classList.add('dog');
    container.append(nameEl, colorEl, numOfLegsEl, favToyEl, hrEl);

    return container;
}

export function renderPresident(president) {
    const fullNameEl = document.createElement('p');
    const yearsServedEl = document.createElement('p');
    const totalYearsEl = document.createElement('p');
    const hrEl = document.createElement('hr');
    const container = document.createElement('div');

    fullNameEl.textContent = `${president.firstName} ${president.lastName}`;
    yearsServedEl.textContent = `${president.start_year} - ${president.end_year}`;
    totalYearsEl.textContent = `Years in office: ${president.total_years}`;

    container.classList.add('president');
    container.append(fullNameEl, yearsServedEl, totalYearsEl, hrEl);

    return container;
}