<?php
include_once __DIR__ . '/../db/pdo.php';

// Requête pour obtenir les accidents par commune ou zone dans le département 49
$reqMap = $bdd->query("
    SELECT com AS zone_id, COUNT(*) AS nb_accidents
    FROM sae303_accident
    WHERE dep = '49'
    GROUP BY com
");
?>