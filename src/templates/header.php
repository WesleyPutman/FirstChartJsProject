<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../public/assets/styles/header.css">
</head>
<body>
    <header>
        <nav role="navigation">
        <div id="menuToggle">

            <input type="checkbox" id="menuCheckbox" />
        
            <span></span>
            <span></span>
            <span></span>
            
            <ul id="menu">
            <li>
                <a href="#">
                <label for="menuCheckbox" onclick="this.parentNode.click();"><img src="../public/assets/icons/home.png" alt="Accueil"></label>
                </a>
            </li>
            <li>
                <a href="#about">
                <label for="menuCheckbox" onclick="this.parentNode.click();"><img src="../public/assets/icons/stats.png" alt="Accueil"></label>
                </a>
            </li>
            
            <!-- These just close the menu -->
        </div>
        </nav>


        <nav>
            <form action="" method="">
                <input id="research-bar" type="text" placeholder="Rechercher....">
            </form>
            <form id="profil-connexion" action="" method="">
                <input id="connexion" type="submit" value="se connecter">
                <div id="profil-container" ><img id="profil" src="../public/assets/img/pp.jfif" alt=""></div>
            </form>
        </nav>
    </header>
</body>
</html>