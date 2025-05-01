<?php
include_once __DIR__ . '/../models/meteoAccidentProportion.php';

// Récupérer les données
$data3 = $req3->fetchAll(PDO::FETCH_ASSOC);

// Définir l'en-tête pour JSON et envoyer les données
header('Content-Type: application/json');
echo json_encode($data3);
?>