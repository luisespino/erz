import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
import { saveFile, openFile } from './model/io.mjs';
import { StartRules, SyntaxError, parse } from './model/parser.mjs'

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

document.getElementById('transform-btn').addEventListener('click', async () => {
    // Obtener el código Mermaid del área de texto
    const input = document.getElementById('mermaid-code').value;

    try {
        // Usar mermaid.mermaidAPI.getDiagramFromText para obtener la estructura interna
        const { diagram, parser } = await mermaid.mermaidAPI.getDiagramFromText(input);

        // Extraer nodos y relaciones usando la API de Mermaid
        const edges = diagram.getEdges();  // Esto debería devolver los bordes
        const vertices = diagram.getVertices();  // Esto debería devolver los vértices

        // Mostrar los bordes y vértices en el div 'ast'
        const result = {
            edges: edges,
            vertices: vertices,
        };

        // Mostrar el resultado
        document.getElementById('ast').textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        console.error("Error al procesar el código Mermaid:", error);

        // Mostrar un mensaje de error en el div
        document.getElementById('ast').textContent = "Error al procesar el código Mermaid: " + error.message;
    }
});
