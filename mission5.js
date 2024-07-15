document.getElementById('fetch-button').addEventListener('click', fetchData);

function fetchData() {
    const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
    if (!pokemonName) {
        alert('ポケモンの名前を入力してください');
        return;
    }
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('ポケモンが見つかりませんでした');
            }
            return response.json();
        })
        .then(data => displayData(data))
        .catch(error => {
            console.error('エラー:', error);
            alert(error.message);
        });
}

function displayData(data) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';

    const dataItem = document.createElement('div');
    dataItem.className = 'data-item';
    dataItem.innerHTML = `
        <h2>${data.name}</h2>
        <p>ID: ${data.id}</p>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>タイプ: ${data.types.map(type => type.type.name).join(', ')}</p>
    `;
    dataContainer.appendChild(dataItem);
}
