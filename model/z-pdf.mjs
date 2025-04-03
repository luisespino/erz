
const { jsPDF } = window.jspdf;

String.prototype.escapeUpper = function() {
    return this.replace(/[-_]/g, '_').toUpperCase();
};

String.prototype.escapeLower = function() {
    return this.replace(/[-_]/g, '_').toLowerCase();
};

const m = 20;
let y = 15;
const h = 5;
const m1 = 25;
const m2 = 30;
let doc = null;

// increment currentY
function i() {
    y = y + h;
    return y;
}

function checkEndPage() {
    if (y >= 250) {
        doc.addPage();
        y = 15;
    }
}

export function zPDF(data) {
    doc = new jsPDF('portrait', 'mm', 'letter');
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Z Notation", m, i());
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Generated by ERZ", m, i());
    i();

    doc.setFont("helvetica", "bold");

    // Procesar las entidades y sus atributos
    doc.setFontSize(12);
    doc.text("Specification of entities and their attributes:",m,i());
    doc.setFontSize(10);
    console.log(doc.getFontList())
    for (let entityName in data.entities) {

        // Entity title
        checkEndPage();
        i();
        const entity = data.entities[entityName];
        doc.setFont("helvetica", "bold");
        doc.text(`Entity: ${entity.name.escapeUpper()}`, m, i());
        i();

        // basic type definition
        checkEndPage();
        doc.setFont("helvetica", "normal");
        doc.text('Basic type definition:', m, i());
        let attrib = '[';
        entity.attr.forEach((attr, index) => {
            attrib += attr.name.escapeUpper();
            if (index < entity.attr.length - 1) attrib += ', ';
        });
        attrib += ']';
        doc.setFont("times", "normal");
        doc.text(attrib, m1, i());
        i();


        // Schema of entity information
        checkEndPage();
        doc.setFont("helvetica", "normal");
        doc.text('Schema of entity information:', m, i());
        doc.setFont("times", "italic");
        i();
        let line1Y = y - 1; // Posición vertical de la línea
        let textY = y; // Posición vertical del texto, un poco por encima de la línea
        let text = `${entity.name.escapeUpper()}_INFORMATION`;
        doc.setLineWidth(0.1); // Establece el grosor de la línea
        doc.line(m1, line1Y, 195, line1Y); // Dibuja la línea desde (10, lineY) hasta (200, lineY)
        doc.setFillColor(255, 255, 255); // Blanco
        doc.rect(m2 - 1, textY - 3, doc.getTextWidth(text) + 4, 8, 'F'); // Dibuja un rectángulo con el fondo blanco, cubriendo el área del texto
        doc.text(text, m2, textY); // Coloca el texto en la posición deseada
        entity.attr.forEach((attr, index) => {
            if (!attr.key) 
                doc.text(`${attr.name.escapeLower()}: ${attr.name.escapeUpper()}`, m2, i());
        });
        i();
        let line2Y = y - 1; // Posición vertical de la línea
        doc.setLineWidth(0.1); // Establece el grosor de la línea
        doc.line(m1, line2Y, 195, line2Y); // Dibuja la línea desde (10, lineY) hasta (200, lineY)
        doc.line(m1, line1Y, m1, line2Y); // Dibuja la línea desde (10, lineY) hasta (200, lineY)
        i();


        // Schema of entity instance
        checkEndPage();
        doc.setFont("helvetica", "normal");
        doc.text('Schema of entity instance:', m, i());
        i();
        doc.setFont("times", "italic");
        line1Y = y - 1; // Posición vertical de la línea
        textY = y; // Posición vertical del texto, un poco por encima de la línea
        text = `${entity.name.escapeUpper()}_INSTANCE`;
        doc.setLineWidth(0.1); // Establece el grosor de la línea
        doc.line(m1, line1Y, 195, line1Y); // Dibuja la línea desde (10, lineY) hasta (200, lineY)
        doc.setFillColor(255, 255, 255); // Blanco
        doc.rect(m2 - 1, textY - 3, doc.getTextWidth(text) + 4, 8, 'F'); // Dibuja un rectángulo con el fondo blanco, cubriendo el área del texto
        doc.text(text, m2, textY); // Coloca el texto en la posición deseada
        let key = '';
        entity.attr.forEach((attr) => {
            if (attr.key && attr.key === 'PK') 
                key = attr.name;
        });
        const bpower = `${key.escapeLower()}:`;
        const apower = `${key.escapeUpper()}`;
        doc.text(bpower, m2, i());
        let imgUrl = 'img/power.png';
        doc.addImage(imgUrl, 'PNG', m2 + doc.getTextWidth(bpower) + 2, y - 3, 3, 3);    
        doc.text(apower, m2 + doc.getTextWidth(bpower) + 6, y);

        const bpfun = `${entity.name.escapeLower()}_information: ${key.escapeUpper()}`;
        const apfun = `${entity.name.escapeUpper()}_INFORMATION`;
        doc.text(bpfun, m2, i());
        imgUrl = 'img/pfun.png';
        doc.addImage(imgUrl, 'PNG', m2 + doc.getTextWidth(bpfun) + 2, y - 3, 3, 3);    
        doc.text(apfun, m2 + doc.getTextWidth(bpfun) + 6, y);

        i();
        const line3Y = y - 1; // Posición vertical de la línea
        doc.setLineWidth(0.1); // Establece el grosor de la línea
        doc.line(m1, line3Y, 75, line3Y); // Dibuja la línea desde (10, lineY) hasta (200, lineY)
        doc.text(`${key.escapeLower()} = dom ${entity.name.escapeLower()}_information`, m2, i());
        i();
        line2Y = y - 1; // Posición vertical de la línea
        doc.setLineWidth(0.1); // Establece el grosor de la línea
        doc.line(m1, line2Y, 195, line2Y); // Dibuja la línea desde (10, lineY) hasta (200, lineY)
        doc.line(m1, line1Y, m1, line2Y); // Dibuja la línea desde (10, lineY) hasta (200, lineY)
        i();
    }
    doc.save("znotation.pdf");
}