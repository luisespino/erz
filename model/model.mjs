// model.mjs

export function saveFile(content, filename) {
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}

export function openFile(callback) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';
    
    input.addEventListener('change', event => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => callback(reader.result);
            reader.readAsText(file);
        }
    });

    input.click();
}
