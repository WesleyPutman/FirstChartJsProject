<?php
include_once __DIR__ . '/../db/pdo.php';
    // Requête SQL pour obtenir le nombre d'accidents par mois
    $req5 = $bdd->query("SELECT COUNT(grav) AS nb_grav FROM sae303_usager WHERE grav = 2");
?>