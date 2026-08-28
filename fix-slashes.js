const fs = require('fs');

const rsfPath = '.next/required-server-files.json';
try {
    let data = JSON.parse(fs.readFileSync(rsfPath, 'utf8'));
    if (data.files && Array.isArray(data.files)) {
        data.files = data.files.map(f => f.replace(/\\\\/g, '/'));
        fs.writeFileSync(rsfPath, JSON.stringify(data, null, 2), 'utf8');
        console.log('Fixed required-server-files.json backslashes.');
    }
} catch(e) {
    console.error(e);
}
