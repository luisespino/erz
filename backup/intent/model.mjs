export function saveToFile(data) {
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'diagram.json';
    link.click();
}

export async function loadFromFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.click();

    return new Promise((resolve, reject) => {
        input.addEventListener('change', async () => {
            const file = input.files[0];
            if (!file) return resolve(null);
            const reader = new FileReader();
            reader.onload = () => resolve(JSON.parse(reader.result));
            reader.onerror = reject;
            reader.readAsText(file);
        });
    });
}
