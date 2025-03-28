import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

// Esperamos que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    mermaid.initialize({
        startOnLoad: false,
        themeVariables: {
            // Cambiar el tamaño de la fuente global
            fontFamily: 'Arial, sans-serif', // Puedes cambiar la fuente si lo deseas
            fontSize: '12px',
        }
    });

    mermaid.contentLoaded();

    // Configurar el evento de clic en el botón para generar el diagrama
    document.getElementById('generate-btn').addEventListener('click', async function() {
        const code = document.getElementById('mermaid-code').value;

        // Eliminar diagramas previos
        const existingDiagrams = document.querySelectorAll('.mermaid');
        existingDiagrams.forEach(diagram => diagram.remove());

        // Crear dinámicamente un nuevo <pre> para insertar el código Mermaid
        const diagram = document.createElement('pre');
        diagram.classList.add('mermaid');
        diagram.innerHTML = code;

        // Agregar el nuevo <pre> al body
        document.body.appendChild(diagram);

        // Procesar el diagrama usando mermaid.run()
        await mermaid.run({
            nodes: [diagram],  // Pasamos el nodo del nuevo <pre> que contiene el código
        });
    });
});

document.getElementById('save-btn').addEventListener('click', () => {
    const code = document.getElementById('mermaid-code').value;
    saveFile(code, 'mermaid-code.txt');
});

document.getElementById('open-btn').addEventListener('click', () => {
    openFile((content) => {
        document.getElementById('mermaid-code').value = content;
    });
});
