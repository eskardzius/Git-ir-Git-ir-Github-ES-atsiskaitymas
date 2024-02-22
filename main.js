document.addEventListener('DOMContentLoaded', function() {
    const mainContainer = document.createElement('div');
    mainContainer.id = 'puslapioKonteineris';
    
    const svgLogo = document.createElement('div');
    svgLogo.classList.add('svgLogo');
    // Įdėti SVG paveikslėlį į svgLogo
    
    const lineVertical = document.createElement('div');
    lineVertical.classList.add('lineVertical');
    // Sukurti vertikalę liniją
    
    const lineHorizontal = document.createElement('div');
    lineHorizontal.classList.add('lineHorizontal');
    // Sukurti horizontalią liniją
    
    const pavadinimas = document.createElement('h1');
    pavadinimas.id = 'pavadinimas';
    // Sukurti pavadinimą
    
    const paragrafas = document.createElement('p');
    paragrafas.id = 'paragrafas';
    // Sukurti paragrafą
    
    const lineHorizontal2 = document.createElement('div');
    lineHorizontal2.classList.add('lineHorizontal2');
    // Sukurti antrą horizontalią liniją
    
    mainContainer.appendChild(svgLogo);
    mainContainer.appendChild(lineVertical);
    mainContainer.appendChild(lineHorizontal);
    mainContainer.appendChild(pavadinimas);
    mainContainer.appendChild(paragrafas);
    mainContainer.appendChild(lineHorizontal2);
    
    document.body.appendChild(mainContainer);
  });