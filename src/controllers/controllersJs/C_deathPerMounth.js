let btn1 = document.getElementById('classic');
let btn2 = document.getElementById('meteo');
let btn3 = document.getElementById('eclairage');

let myChart; // Variable globale pour stocker le graphique actuel




btn1.addEventListener('click', function () {
    if (myChart) myChart.destroy(); // Détruit le graphique existant, s'il y en a un

    fetch('controllers/C_deathPerMounth.php')
        .then(response => response.json())
        .then(data => {
            createChart1(data); // Appelle la fonction pour créer le graphique
        })
        .catch(error => console.error('Erreur:', error));

    function createChart1(data) {
        const mois = data.map(item => item.mois);
        const nbAccidents = data.map(item => item.nb_accidents);

        const ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: mois,
                datasets: [{
                    label: 'Nombre d\'accidents par mois',
                    data: nbAccidents,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
});

btn2.addEventListener('click', function () {
    if (myChart) myChart.destroy(); // Détruit le graphique existant, s'il y en a un

    fetch('controllers/C_meteoAccidentProportion.php')
        .then(response => response.json())
        .then(data => {
            createChart2(data);
        })
        .catch(error => console.error('Erreur:', error));

    function createChart2(data) {

        
        const mois = data.map(item => item.mois);

           //Pour la légende 
           const atmMapping = {
            1: "– Normale",
            2: "– Pluie légère",
            3: "– Pluie forte",
            4: "– Neige - grêle",
            5: "– Brouillard - fumée",
            6: "– Vent fort - tempête",
            7: "– Temps éblouissant",
            8: "– Temps couvert",
            9: "– Autre"
        // Ajouter d'autres correspondances si nécessaire
        };

        // Préparation des données par mois et par atmosphère
        const moisLabels = [...new Set(data.map(item => item.mois))];
        const atmCategories = Object.keys(atmMapping);

        // Préparation des datasets pour chaque type d'atmosphère
        const datasets = atmCategories.map(atm => {
            return {
                label: atmMapping[atm],
                data: moisLabels.map(mois => {
                    const moisData = data.find(item => item.mois === mois && item.atm == atm);
                    return moisData ? moisData.nb_accidents : 0;
                }),
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.7)`,
                borderWidth: 1
            };
        });

        // Création du graphique avec Chart.js
        const ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: moisLabels,
                datasets: datasets
            },
            options: {
                scales: {
                    x: {
                        stacked: true // Active l'empilement pour l'axe X
                    },
                    y: {
                        stacked: true, // Active l'empilement pour l'axe Y
                        beginAtZero: true
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });
    }
});

btn3.addEventListener('click', function () {
    if (myChart) myChart.destroy(); // Détruit le graphique existant, s'il y en a un

    fetch('controllers/C_lightAccidentProportion.php')
        .then(response => response.json())
        .then(data => {
            createChart3(data);
        })
        .catch(error => console.error('Erreur:', error));

    function createChart3(data) {

        const mois = data.map(item => item.mois);

        // Pour la légende
        const lumMapping = {
            1: "– Plein jour",
            2: "– Crépuscule ou aube",
            3: "– Nuit avec éclairage public allumé",
            4: "– Nuit sans éclairage public",
            5: "– Nuit avec éclairage public non allumé"
            // Ajouter d'autres correspondances si nécessaire
        };

        // Préparation des données par mois et par type d'éclairage
        const moisLabels = [...new Set(data.map(item => item.mois))];
        const lumCategories = Object.keys(lumMapping);

        // Préparation des datasets pour chaque type d'éclairage
        const datasets = lumCategories.map(lum => {
            return {
                label: lumMapping[lum],
                data: moisLabels.map(mois => {
                    const moisData = data.find(item => item.mois === mois && item.lum == lum);
                    return moisData ? moisData.nb_accidents : 0;
                }),
                backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.7)`,
                borderWidth: 1
            };
        });

        // Création du graphique avec Chart.js
        const ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: moisLabels,
                datasets: datasets
            },
            options: {
                scales: {
                    x: {
                        stacked: true // Active l'empilement pour l'axe X
                    },
                    y: {
                        stacked: true, // Active l'empilement pour l'axe Y
                        beginAtZero: true
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                size: 12
                            }
                        }
                    }
                }
            }
        });
    }
});
