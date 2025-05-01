<?php
include_once __DIR__ . '/../db/pdo.php';
// Requête SQL pour obtenir le nombre d'accidents par heure
$reqHour = $bdd->query("SELECT HOUR(hrmn) AS hour, COUNT(*) AS nb_accidents 
                        FROM sae303_accident 
                        GROUP BY hour 
                        ORDER BY hour ASC");
?>