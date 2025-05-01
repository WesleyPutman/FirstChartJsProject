<?php
    // Configuration locale (développement)
    if ($_SERVER['SERVER_NAME'] == 'localhost') {
        $username = "root";
        $password = "";
        $host = "localhost";
        $dbname = "sae303";
    } 
    try { 
        $bdd = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]); 
    }
    catch (PDOException $e) { 
        die('Erreur de connexion à la base de données: ' . $e->getMessage()); 
    }
?>