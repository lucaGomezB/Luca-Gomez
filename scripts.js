document.addEventListener('DOMContentLoaded', function() {
    // Get the full browser language (e.g., "en-US", "es-ES", "es")
    const userLang = navigator.language; 
    
    // Define the PDF file based on language

    if (userLang.toLowerCase().startsWith('es')) {
        pdfSource = "LucaValentinoGomezBibiloniCVENGCell.pdf";
    }else{
        pdfSource = "LucaValentinoGomezBibiloniCVENGCell.pdf";
    }

    // Find the iframe element and update its source
    const iframe = document.getElementById('pdf-viewer');
    if (iframe) {
        iframe.src = pdfSource;
    }
        
    // Optional: Update the <html> lang attribute for accessibility/CSS purposes
    document.documentElement.lang = userLang.toLowerCase().startsWith('es') ? 'es' : 'en';
});