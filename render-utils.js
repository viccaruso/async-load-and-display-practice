export function renderPokemon(pokemon) {
    const name = document.createElement('p');
    const primaryType = document.createElement('p');
    const secondaryType = document.createElement('p');
    const container = document.createElement('div');

    name.textContent = pokemon.name;
    primaryType.textContent = pokemon.primary_type;
    secondaryType.textContent = pokemon.secondary_type;

    container.classList.add('pokemon');
    container.append(name, primaryType, secondaryType);

    return container;
}