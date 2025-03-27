import { saveToFile, loadFromFile } from './model.mjs';

document.addEventListener("DOMContentLoaded", () => {
    const diagram = document.getElementById('diagram');
    let entities = [];
    let relationships = [];

    // Función para crear entidad
    function createEntity(x, y, name) {
        const entity = document.createElement('div');
        entity.classList.add('entity');
        entity.textContent = name;
        entity.style.left = `${x}px`;
        entity.style.top = `${y}px`;
        diagram.appendChild(entity);

        // Datos de la entidad
        const entityData = { name, x, y, attributes: [] };
        entities.push(entityData);

        entity.setAttribute('draggable', true);
        entity.dataset.name = name; // Almacena el nombre para referencia

        // Función de drag and drop mejorada
        entity.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('entityName', name);
            // Guardamos el desplazamiento inicial para evitar el tirón
            const rect = entity.getBoundingClientRect();
            entity.dataset.offsetX = event.clientX - rect.left;
            entity.dataset.offsetY = event.clientY - rect.top;
        });

        entity.addEventListener('drag', (event) => {
            if (event.clientX === 0 && event.clientY === 0) return; // Prevenir que el evento de drag no se dispare en posiciones erróneas
            const newX = event.clientX - diagram.offsetLeft - entity.dataset.offsetX;
            const newY = event.clientY - diagram.offsetTop - entity.dataset.offsetY;

            // Actualizamos la posición de la entidad en el DOM
            entity.style.left = `${newX}px`;
            entity.style.top = `${newY}px`;

            // Actualizamos la posición de la entidad en el modelo de datos
            const entityModel = entities.find(ent => ent.name === name);
            if (entityModel) {
                entityModel.x = newX;
                entityModel.y = newY;
            }

            // Re-dibujamos las relaciones después de mover
            drawRelationships();
        });

        entity.addEventListener('dragend', (event) => {
            // Evitar que las entidades "salten" a una nueva posición
            const newX = event.clientX - diagram.offsetLeft - entity.dataset.offsetX;
            const newY = event.clientY - diagram.offsetTop - entity.dataset.offsetY;

            // Actualizamos la posición en el modelo de datos
            const entityModel = entities.find(ent => ent.name === name);
            if (entityModel) {
                entityModel.x = newX;
                entityModel.y = newY;
            }

            // Re-dibujamos las relaciones
            drawRelationships();
        });

        // Función para agregar atributos a la entidad
        entity.addEventListener('click', () => {
            const attributeName = prompt("Enter attribute name:");
            if (attributeName) {
                const attributeText = document.createElement('div');
                attributeText.classList.add('attribute');
                attributeText.textContent = attributeName;
                entity.appendChild(attributeText);

                // Guardamos el atributo en el modelo
                const entityModel = entities.find(ent => ent.name === name);
                if (entityModel) {
                    entityModel.attributes.push(attributeName);
                }
            }
        });
    }

    // Función para dibujar las relaciones con notación Barker (pata de gallo)
    function drawRelationships() {
        // Limpiamos las relaciones actuales antes de dibujar las nuevas
        const existingLines = document.querySelectorAll('.relationship');
        existingLines.forEach(line => line.remove());
    
        relationships.forEach(relationship => {
            const startEntity = document.querySelector(`.entity[data-name="${relationship.start}"]`);
            const endEntity = document.querySelector(`.entity[data-name="${relationship.end}"]`);
    
            if (startEntity && endEntity) {
                let startX, endX, startY, endY;
                let caseX, caseY;

                const startEntityOffsetRight = startEntity.offsetLeft + startEntity.offsetWidth;
                const endEntityOffsetRight = endEntity.offsetLeft + endEntity.offsetWidth;
                if (startEntityOffsetRight <= endEntity.offsetLeft) {
                    startX = startEntity.offsetLeft + startEntity.offsetWidth;
                    endX = endEntity.offsetLeft;
                    caseX = 0;
                } else if (endEntityOffsetRight <= startEntity.offsetLeft) {
                    startX = startEntity.offsetLeft;
                    endX = endEntity.offsetLeft + endEntity.offsetWidth;
                    caseX = 1;
                } else {
                    startX = startEntity.offsetLeft + startEntity.offsetWidth / 2;
                    endX = endEntity.offsetLeft + endEntity.offsetWidth / 2;
                    caseX = 2;
                }

                const startEntityOffsetBottom = startEntity.offsetTop + startEntity.offsetHeight;
                const endEntityOffsetBottom = endEntity.offsetTop + endEntity.offsetHeight;
                if (startEntityOffsetBottom <= endEntity.offsetTop) {
                    startY = startEntity.offsetTop + startEntity.offsetHeight;
                    endY  = endEntity.offsetTop;
                    caseY = 0;
                } else if (endEntityOffsetBottom <= startEntity.offsetTop) {
                    startY = startEntity.offsetTop;
                    endY = endEntity.offsetTop + endEntity.offsetHeight;
                    caseY = 1;
                } else {
                    startY = startEntity.offsetTop + startEntity.offsetHeight / 2;
                    endY = endEntity.offsetTop + endEntity.offsetHeight / 2 ;
                    caseY = 2;
                }
                /*
                } else if (startEntity.offsetTop == endEntity.offsetTop){
                    startY = startEntity.offsetTop + startEntity.offsetHeight / 2;
                    endY = endEntity.offsetTop + endEntity.offsetHeight / 2 ;
                    caseY = 2;
                } else if (startEntity.offsetTop < endEntity.offsetTop){
                    const deltaY = (endEntity.offsetTop - startEntityOffsetBottom) / 2;
                    startY = startEntity.offsetTop + endEntity.offsetTop + deltaY;
                    endY = startEntity.offsetTop + endEntity.offsetTop + deltaY;
                    caseY = 2;
                } else if (startEntity.offsetTop > endEntity.offsetTop){
                    const deltaY = (startEntity.offsetTop - endEntityOffsetBottom) / 2; 
                    startY = endEntity.offsetTop + startEntity.offsetTop + deltaY;
                    endY = endEntity.offsetTop + startEntity.offsetTop + deltaY;
                    caseY = 2;
                }
                    */

                if ((caseX == 0 || caseX == 1) && caseY == 2) {
                    const line = document.createElement('div');
                    line.classList.add('relationship');
                    line.style.position = 'absolute';
                    line.style.width = `${Math.abs(startX - endX)}px`;
                    line.style.height = '1px'; // Línea más delgada
                    line.style.backgroundColor = 'black';
                    line.style.left = `${Math.min(startX, endX)}px`;
                    line.style.top = `${Math.min(startY, endY)}px`;
                    diagram.appendChild(line);                    
                } else if (caseX == 0 && caseY == 0) {
                    // Crear una línea horizontal (conectar startX y endX)
                    const horizontalLine = document.createElement('div');
                    horizontalLine.classList.add('relationship');
                    horizontalLine.style.position = 'absolute';
                    horizontalLine.style.height = '1px';
                    horizontalLine.style.backgroundColor = 'black';
                    horizontalLine.style.left = `${Math.min(startX, endX)}px`;
                    horizontalLine.style.top = `${startY}px`;
                    horizontalLine.style.width = `${Math.abs(startX - endX)+ endEntity.offsetWidth / 2}px`;
    
                    diagram.appendChild(horizontalLine);
    
                    // Crear una línea vertical (de startY a endY)
                    const verticalLine = document.createElement('div');
                    verticalLine.classList.add('relationship');
                    verticalLine.style.position = 'absolute';
                    verticalLine.style.height = `${Math.abs(startY - endY)- endEntity.offsetHeight / 2}px`;
                    verticalLine.style.width = '1px';
                    verticalLine.style.backgroundColor = 'black';
                    verticalLine.style.left = `${endX+ endEntity.offsetWidth / 2}px`; // El final de la horizontal
                    verticalLine.style.top = `${startY}px`;
    
                    diagram.appendChild(verticalLine);                   
                }
        
                // Verificar si la entidad start está por encima de la entidad end
                else if (startY < endEntity.offsetTop) {
                    // Crear una línea horizontal (conectar startX y endX)
                    const horizontalLine = document.createElement('div');
                    horizontalLine.classList.add('relationship');
                    horizontalLine.style.position = 'absolute';
                    horizontalLine.style.height = '1px';
                    horizontalLine.style.backgroundColor = 'black';
                    horizontalLine.style.left = `${Math.min(startX, endX)}px`;
                    horizontalLine.style.top = `${startY}px`;
                    horizontalLine.style.width = `${Math.abs(startX - endX)+ endEntity.offsetWidth / 2}px`;
    
                    diagram.appendChild(horizontalLine);
    
                    // Crear una línea vertical (de startY a endY)
                    const verticalLine = document.createElement('div');
                    verticalLine.classList.add('relationship');
                    verticalLine.style.position = 'absolute';
                    verticalLine.style.height = `${Math.abs(startY - endY)- endEntity.offsetHeight / 2}px`;
                    verticalLine.style.width = '1px';
                    verticalLine.style.backgroundColor = 'black';
                    verticalLine.style.left = `${endX+ endEntity.offsetWidth / 2}px`; // El final de la horizontal
                    verticalLine.style.top = `${startY}px`;
    
                    diagram.appendChild(verticalLine);
                } else {
                    // Si las entidades están alineadas en Y o el start está abajo de la entidad end
                    // Aquí podemos seguir creando una línea diagonal como en el código original si no es necesario hacerla rectangular
                    const line = document.createElement('div');
                    line.classList.add('relationship');
                    line.style.position = 'absolute';
                    line.style.width = `${Math.abs(startX - endX)}px`;
                    line.style.height = '1px'; // Línea más delgada
                    line.style.backgroundColor = 'black';
                    line.style.left = `${Math.min(startX, endX)}px`;
                    line.style.top = `${Math.min(startY, endY)}px`;
    
                    diagram.appendChild(line);
                }
            }
        });
    }
    

                   /*

                // Diferenciar si la relación es obligatoria o no (usamos punteado para opcional)
                if (relationship.optional) {
                    line.style.borderStyle = 'dashed';
                } else {
                    line.style.borderStyle = 'solid';
                }
                    */

    // Función para agregar relación entre entidades
    function addRelation(start, end, optional = false) {
        relationships.push({ start, end, optional });
        drawRelationships();
    }

    // Función para guardar el diagrama
    document.getElementById('saveBtn').addEventListener('click', () => {
        const data = { entities, relationships };
        saveToFile(data);
    });

    // Función para cargar el diagrama
    document.getElementById('loadBtn').addEventListener('click', () => {
        loadFromFile().then(data => {
            if (data) {
                // Borrar el diagrama actual y cargar los datos
                diagram.innerHTML = '';
                entities = [];
                relationships = [];

                // Crear las entidades desde los datos cargados
                data.entities.forEach(entity => {
                    createEntity(entity.x, entity.y, entity.name);
                    entity.attributes.forEach(attr => {
                        const entityElement = document.querySelector(`.entity[data-name="${entity.name}"]`);
                        const attribute = document.createElement('div');
                        attribute.classList.add('attribute');
                        attribute.textContent = attr;
                        entityElement.appendChild(attribute);
                    });
                });

                // Crear las relaciones
                data.relationships.forEach(rel => {
                    addRelation(rel.start, rel.end, rel.optional);
                });
            }
        });
    });

    // Funciones para agregar nuevas entidades, atributos y relaciones
    document.getElementById('addEntityBtn').addEventListener('click', () => {
        const name = prompt("Enter the entity name:");
        createEntity(100, 100, name);
    });

    document.getElementById('addRelationBtn').addEventListener('click', () => {
        const start = prompt("Enter the start entity:");
        const end = prompt("Enter the end entity:");
        const optional = confirm("Is this relation optional?");
        addRelation(start, end, optional);
    });

    // Funciones para cargar un ejemplo
    createEntity(100, 100, 'Entity 1');
    createEntity(300, 100, 'Entity 2');
    addRelation('Entity 1', 'Entity 2');
});
