import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
import { saveFile, openFile } from './model/io.mjs';
import { StartRules, SyntaxError, parse } from './model/parser.mjs'
import { zLatex } from './model/z-latex.mjs'
import { zPDF } from './model/z-pdf.mjs'

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
        document.getElementById("erDiagram").appendChild(diagram);

        // Procesar el diagrama usando mermaid.run()
        await mermaid.run({
            nodes: [diagram],  // Pasamos el nodo del nuevo <pre> que contiene el código
        });
    });

    document.getElementById('generate-btn').click();
    document.getElementById('translate-btn').click(); 
});

// Evento del botón de guardar
document.getElementById('save-btn').addEventListener('click', () => {
    const code = document.getElementById('mermaid-code').value;  // Contenido del código
    let filename = prompt("Enter filename:", "er.txt");  // Preguntar el nombre del archivo

    // Si el usuario cancela (filename es null), no hacer nada
    if (filename === null) {
        return;  // Salir de la función sin hacer nada
    }

    saveFile(code, filename);  // Llamamos a la función para guardar el archivo
});

document.getElementById('open-btn').addEventListener('click', () => {
    openFile((content) => {
        document.getElementById('mermaid-code').value = content;
    });
});

document.getElementById('translate-btn').addEventListener('click', async () => {
    // Obtener el código Mermaid del área de texto
    const input = document.getElementById('mermaid-code').value;
    const zLatexDiv = document.getElementById('zLatex');
    zLatexDiv.value = zLatex(parse(input));
});

document.getElementById('download-btn').addEventListener('click', async () => {
    // Obtener el código Mermaid del área de texto
    const input = document.getElementById('mermaid-code').value;
    zPDF(parse(input));
});


document.getElementById('copy-btn').addEventListener('click', () => {
    const textarea = document.getElementById('zLatex').value;

    navigator.clipboard.writeText(textarea).then(() => {
    }).catch(err => {
        console.error('Copy error: ', err);
    });

});
