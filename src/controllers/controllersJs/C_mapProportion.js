fetch('controllers/C_mapProportion.php')
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Erreur:', data.error);
            return;
        }

        colorizeMap(data);
    })
    .catch(error => console.error('Erreur:', error));

function colorizeMap(data) {
    // Chargez la carte SVG
    fetch('./map49.svg')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(svgContent => {
      // Utilisez DOMParser pour convertir la chaîne SVG en un élément DOM
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
  
      // Sélectionnez le conteneur et ajoutez le SVG
      const mapContainer = document.getElementById('map-container');
      mapContainer.innerHTML = ''; // Vider le conteneur avant d'ajouter le nouveau SVG
      mapContainer.appendChild(svgDoc.documentElement); // Ajoutez l'élément SVG au DOM
  
      // Vérification du SVG injecté dans le DOM
      console.log('SVG injected into map-container:', mapContainer.innerHTML);
  
      // Récupérer tous les éléments <path> dans le SVG en tenant compte du namespace
      const namespace = "http://www.w3.org/2000/svg";
      const paths = svgDoc.querySelectorAll('path');  // Sélectionne tous les éléments <path> dans le SVG
  
      console.log('Paths found:', paths); // Affiche tous les éléments <path> trouvés
  
      // Appliquez des modifications aux zones du SVG
      data.forEach(item => {
        const zoneId = `zone-${item.zone_id}`; // ID attendu, exemple: `zone-0`
        const zone = svgDoc.querySelector(`#${zoneId}`);
  
        console.log(`Looking for zone with id ${zoneId}:`, zone); // Vérifie si l'élément existe dans le DOM
  
        if (zone) {
          const accidents = item.nb_accidents;
          const intensity = Math.min(accidents * 10, 255); // Calcul de l'intensité pour la couleur
  
          zone.style.fill = `rgb(${intensity}, 0, 0)`; // Appliquer la couleur
          zone.setAttribute('data-tooltip', `Zone ${item.zone_id}: ${accidents} accidents`);
  
          zone.addEventListener('mouseover', (e) => {
            const tooltip = document.getElementById('tooltip');
            tooltip.innerHTML = e.target.getAttribute('data-tooltip');
            tooltip.style.display = 'block';
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
          });
  
          zone.addEventListener('mouseout', () => {
            document.getElementById('tooltip').style.display = 'none';
          });
        } else {
          console.log(`Zone with id ${zoneId} not found in the SVG.`);
        }
      });
    })

        .catch(error => console.error('Erreur lors du chargement de la carte SVG:', error));
}