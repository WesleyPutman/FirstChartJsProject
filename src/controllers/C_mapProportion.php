<?php
include_once __DIR__ . '/../models/mapProportion.php';

header('Content-Type: application/json');

// Récupérer les données des zones accidentées
$dataMap = $reqMap->fetchAll(PDO::FETCH_ASSOC);

// Vérifiez si des données sont disponibles
if (!$dataMap) {
    echo json_encode(['error' => 'Aucune donnée trouvée.']);
    exit;
}

// Encodez les données en JSON
echo json_encode($dataMap);
?>