document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page'); // Selecciona todas las "páginas"
    const pageHeight = window.innerHeight; // Altura de la ventana
    let currentHeight = 0; // Altura actual de la página

    pages.forEach((page, index) => {
        currentHeight += page.offsetHeight; // Suma la altura de cada página

        // Si la altura total excede la altura de la ventana, crea una nueva página
        if (currentHeight > pageHeight) {
            const newPage = document.createElement('div');
            newPage.classList.add('page');
            newPage.innerHTML = `<div class="custom-header">
                                    <div class="header-text">
                                        <strong>
                                            <div class="header-line">Clase Particular:</div>
                                            <div class="header-line">Análisis de mallas y de nodos</div>
                                        </strong>
                                    </div>
                                    <div class="separator-line"></div>
                                  </div>
                                  <div class="content">
                                    <div class="section">
                                        ${page.innerHTML} <!-- Copia el contenido existente -->
                                    </div>
                                  </div>`;
            page.parentNode.insertBefore(newPage, page.nextSibling); // Inserta la nueva página después de la actual
            page.remove(); // Elimina la página actual
        }
    });
});
