document.addEventListener('DOMContentLoaded', function() {
    // Get the browser language
    const userLang = navigator.language || navigator.userLanguage; 
    
    // Check if language is Spanish
    if (userLang.toLowerCase().startsWith('es')) {
        // Define variables with 'let' or 'const'
        const pdfSource = "./LucaValentinoGomezBibiloniCVCell.pdf";
        
        // Update the iframe source
        // This now matches the ID in the HTML above
        const iframe = document.getElementById('pdf-viewer');
        if (iframe) {
            iframe.src = pdfSource;
        }

        // Update the title
        const titulo_pagina = document.getElementById('titulo_pagina');
        if (titulo_pagina){
            titulo_pagina.textContent = "Bienvenido a mi página!"; // Fixed spelling: "mi" instead of "mí"
        }
    }

    // Update HTML lang attribute
    document.documentElement.lang = userLang.toLowerCase().startsWith('es') ? 'es' : 'en';
});