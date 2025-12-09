document.addEventListener('DOMContentLoaded', function() {
    // Get the full browser language (e.g., "en-US", "es-ES", "es")
    const userLang = navigator.language; 
    
    // Define the PDF file based on language

    if (userLang.toLowerCase().startsWith('es')) {
        pdfSource = "LucaValentinoGomezBibiloniCVESCell.pdf";
        titulo = "Bienvenido a mí página!"
        // Find the iframe element and update its source
        const iframe = document.getElementById('pdf-viewer');
        if (iframe) {
            iframe.src = pdfSource;
        }
        const titulo_pagina = document.getElementById('titulo_pagina');
        if(titulo_pagina){
            titulo_pagina.textContent = "Bienvenido a mí página!"
        }
    }

    // Optional: Update the <html> lang attribute for accessibility/CSS purposes
    document.documentElement.lang = userLang.toLowerCase().startsWith('es') ? 'es' : 'en';
});