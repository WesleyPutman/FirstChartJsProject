fetch('controllers/C_colProportion.php')
    .then(response => response.json())
    .then(data2 => {
        // Appelle la fonction pour générer le graphique avec les données reçues
        createChart2(data2);
    })
    .catch(error => console.error('Erreur:', error));


    function createChart2(data2){
    // Convertir les données PHP en JavaScript (généré en PHP)
    const dataFromPHP2 = data2;
    //Pour la légende 
        const colMapping = {
        1: 'Deux véhicules - frontale',
        2: 'Deux véhicules – par l’arrière',
        3: 'Deux véhicules – par le coté',
        4: 'Trois véhicules et plus – en chaîne',
        5: 'Trois véhicules et plus - collisions multiples',
        6: '– Autre collision',
        7: '– Sans collision'
    // Ajouter d'autres correspondances si nécessaire
    };

    // Extraire les mois et le nombre d'accidents
        const col = dataFromPHP2.map(item => colMapping[item.col] || 'Non renseigné');
        const nbAccidents2 = dataFromPHP2.map(item => item.nb_accidents);

    // Créer le graphique avec Chart.js
        var ctx2 = document.getElementById('myChart2').getContext('2d');
        var myChart2 = new Chart(ctx2, {
            type: 'doughnut', // Type de graphique : bar, line, etc.
            data: {
                labels: col, // Utilisation des colissions comme labels
                datasets: [{
                    label: 'Nombre d\'accidents par col',
                    data: nbAccidents2, // Utilisation du nombre d'accidents pour les données
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(75, 192, 192)',
                        'rgb(255, 206, 86)',
                        'rgb(153, 102, 255)',
                        'rgb(255, 159, 64)',
                        'rgb(201, 203, 207)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
    ],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,  // Active la réactivité
                maintainAspectRatio: false,  // Permet de changer l'aspect ratio
                plugins: {
                    legend: {
                        display: true,  // Affiche la légende
                        position: 'left', // Position de la légende
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
                cutout: '70%',  // Cette option permet de rendre le "doughnut" en ajustant l'épaisseur
            }
        });

    }