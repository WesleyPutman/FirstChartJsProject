<?php
include_once __DIR__ . '/../db/pdo.php';
    // Requête SQL pour obtenir le nombre d'accidents par mois
    $req1 = $bdd->query("SELECT mois, COUNT(*) AS nb_accidents FROM sae303_accident WHERE dep = 49 GROUP BY mois");
?>