fetch('controllers/C_timeProportion.php')
    .then(response => response.json())
    .then(dataHour => {
        // Appelle la fonction pour générer le graphique avec les données reçues
        createChartHour(dataHour);
    })
    .catch(error => console.error('Erreur:', error));

function createChartHour(dataHour) {
    // Convertir les données PHP en JavaScript (généré en PHP)
    const dataFromPHPHour = dataHour;

    // Extraire les heures et le nombre d'accidents
    const hours = dataFromPHPHour.map(item => `${item.hour}h`);
    const nbAccidentsHour = dataFromPHPHour.map(item => item.nb_accidents);

    // Créer le graphique avec Chart.js
    var ctxHour = document.getElementById('myChartHour').getContext('2d');
    var myChartHour = new Chart(ctxHour, {
        type: 'line', // Type de graphique : ligne
        data: {
            labels: hours, // Utilisation des heures comme labels
            datasets: [{
                label: 'Nombre d\'accidents par heure',
                data: nbAccidentsHour, // Utilisation du nombre d'accidents pour les données
                borderColor: 'rgba(75, 192, 192, 1)', // Couleur des lignes
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Remplissage sous la courbe
                borderWidth: 2, // Épaisseur de la ligne
                tension: 0.4, // Lissage des courbes
                pointRadius: 4, // Taille des points
                pointBackgroundColor: 'rgba(255, 99, 132, 1)' // Couleur des points
            }]
        },
        options: {
            responsive: true,  // Active la réactivité
            maintainAspectRatio: false,  // Permet de changer l'aspect ratio
            plugins: {
                legend: {
                    display: true,  // Affiche la légende
                    position: 'top', // Position de la légende
                    labels: {
                        color: 'black',  // Couleur du texte
                        padding: 10,  // Marge intérieure
                        font: {
                            size: 14,  // Taille de la police
                        }
                    }
                },
                tooltip: {
                    enabled: true,  // Active les tooltips
                }
            },
            animation: {
                animateScale: true, // Active l'animation du graphique
                animateRotate: true, // Active l'animation de la rotation
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Heures de la journée',
                        color: 'black',
                        font: {
                            size: 14,
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Nombre d\'accidents',
                        color: 'black',
                        font: {
                            size: 14,
                        }
                    },
                    beginAtZero: true
                }
            }
        }
    });
}
