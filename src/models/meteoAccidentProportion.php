<?php
include_once __DIR__ . '/../db/pdo.php';
    // Requête SQL pour obtenir le nombre d'accidents par mois
    $req3 = $bdd->query("SELECT mois, atm, COUNT(*) AS nb_accidents
    FROM sae303_accident
    WHERE atm IN (1, 2, 3, 4, 5, 6, 7, 8, 9)
    GROUP BY mois, atm
    ORDER BY mois, atm
");
?>