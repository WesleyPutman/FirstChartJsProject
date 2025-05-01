fetch('controllers/C_death.php')
    .then(response => response.json()) // Convertit la réponse JSON
    .then(data => {
        const deathCount = document.getElementById("death");

        if (Array.isArray(data) && data.length > 0) {
            // Parcourt le tableau et extrait uniquement la valeur de 'nb_grav'
            const listItems = data.map(item => `${item.nb_grav}</li>`).join('');
            deathCount.innerHTML = `
            <h2>Nombre de morts cette année</h2>
            <p>${listItems}</p>`;
        } else {
            deathCount.innerHTML = `<p>Aucune donnée disponible.</p>`;
        }
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
        const deathCount = document.getElementById("death");
        deathCount.innerHTML = `<p>Erreur lors du chargement des données.</p>`;
    });
