<?php
include_once __DIR__ . '/../models/death.php';

// Récupérer les données
$data = $req5->fetchAll(PDO::FETCH_ASSOC);

// Définir l'en-tête pour JSON et envoyer les données
header('Content-Type: application/json');
echo json_encode($data);
?>