<?php
include_once __DIR__ . '/../db/pdo.php';
    // Requête SQL pour obtenir le nombre d'accidents par mois
    $req2 = $bdd->query("SELECT col, COUNT(*) AS nb_accidents FROM sae303_accident WHERE col IN (1, 2, 3, 4, 5, 6,7) GROUP BY col");
?>