<?php
include_once __DIR__ . '/../db/pdo.php';
    // Requête SQL pour obtenir le nombre d'accidents par mois
    $req4 = $bdd->query("SELECT mois, lum, COUNT(*) AS nb_accidents
    FROM sae303_accident
    WHERE lum IN (1, 2, 3, 4, 5)
    GROUP BY mois, lum
    ORDER BY mois, lum
");
?>