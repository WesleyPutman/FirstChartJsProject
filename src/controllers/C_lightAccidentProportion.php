<?php
include_once __DIR__ . '/../models/lightAccidentProportion.php';

// Récupérer les données
$data4 = $req4->fetchAll(PDO::FETCH_ASSOC);

// Définir l'en-tête pour JSON et envoyer les données
header('Content-Type: application/json');
echo json_encode($data4);
?>