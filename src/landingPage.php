<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accident.gouv</title>
    <!-- Intégration de Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Vos styles existants -->
    <link rel="stylesheet" href="../public/assets/styles/style.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-gray-50">
<?php
include 'templates/header.php';
?>
    <!-- Container principal avec padding responsive -->
    <div class="container mx-auto px-4 py-8">
        <!-- Premier groupe de graphiques -->
        <div id="bodyContainer" class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="container bg-white p-4 rounded-lg shadow-md" id="container2">
                <h2 class="text-xl font-bold mb-4 text-gray-800">Accident par collisions</h2>
                <div class="h-64 md:h-80">
                    <canvas id="myChart2"></canvas>
                </div>
            </div>
            <div class="container bg-white p-4 rounded-lg shadow-md" id="contain3">
                <h2 class="text-xl font-bold mb-4 text-gray-800">Accident selon l'heure</h2>
                <div class="h-64 md:h-80">
                    <canvas id="myChartHour"></canvas>
                </div>
            </div>
        </div>

        <!-- Deuxième groupe de graphiques -->
        <div id="bodyContainer3" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="container bg-white p-4 rounded-lg shadow-md md:col-span-2 lg:col-span-3" id="stat">
                <h2 class="text-xl font-bold mb-4 text-gray-800">Page regroupant les statistiques de base de l'accidentologie de la Maine-et-Loire</h2>
            </div>
            <div class="container bg-white p-4 rounded-lg shadow-md" id="death">
                <!-- Le contenu sera ajouté par JavaScript -->
            </div>
            <div class="container bg-white p-4 rounded-lg shadow-md md:col-span-1 lg:col-span-2" id="container1">
                <h2 class="text-xl font-bold mb-4 text-gray-800">Accidents selon aléas</h2>
                <div class="h-64 md:h-80">
                    <canvas id="myChart"></canvas>
                </div>
                <div class="flex flex-wrap gap-2 mt-4">
                    <button id="classic" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Classique</button>
                    <button id="meteo" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Météo</button>
                    <button id="eclairage" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Éclairage</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="controllers/controllersJs/C_deathPerMounth.js"></script>
    <script src="controllers/controllersJs/C_colProportion.js"></script>
    <script src="controllers/controllersJs/C_death.js"></script>
    <script src="controllers/controllersJs/C_timeProportion.js"></script>
    <!-- <script src="controllers/controllersJs/C_mapProportion.js"></script> -->
</body>
</html>