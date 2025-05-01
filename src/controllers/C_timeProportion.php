<?php
include_once __DIR__ . '/../models/timeProportion.php';

// Récupérer les données
$dataHour = $reqHour->fetchAll(PDO::FETCH_ASSOC);

// Définir l'en-tête pour JSON et envoyer les données
header('Content-Type: application/json');
echo json_encode($dataHour);
?>