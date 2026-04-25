fetch('setup.json')
    .then(response => response.json())
    .then(data => {
        const app = document.getElementById('app');
        data.forEach(item => {
            app.innerHTML += `
                <div class="card">
                    <h3>${item.nome}</h3>
                    <p><small>Aggiornato il: ${item.data}</small></p>
                    <p>${item.descrizione}</p>
                    <a href="files/${item.file}" class="btn" download>Scarica il setup</a>
                </div>
            `;
        });
    });