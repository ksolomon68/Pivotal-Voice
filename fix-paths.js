const fs = require('fs');
const path = require('path');

const targetDirs = ['.next'];
const extensionsToReplace = ['.js', '.json', '.html', '.map', '.rsc', '.txt'];

function replaceInFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        
        // Regex to match the path regardless of slash direction or escaping
        // Match C:\Users\KSOLO\.gemini\antigravity-ide\scratch\Pivotal Voice
        // or C:/Users/KSOLO/...
        // or C:\\Users\\KSOLO\\...
        const regex = /C:(?:\\\\|\\|\/)Users(?:\\\\|\\|\/)KSOLO(?:\\\\|\\|\/)\.gemini(?:\\\\|\\|\/)antigravity-ide(?:\\\\|\\|\/)scratch(?:\\\\|\\|\/)Pivotal(?: |%20)Voice/gi;
        
        content = content.replace(regex, '/home/pivotalvoice/Pivotal-Voice');
        
        // Also replace any generic /home/user/Pivotal-Voice paths from the remote build
        content = content.replace(/\/home\/user\/Pivotal-Voice/gi, '/home/pivotalvoice/Pivotal-Voice');
        
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Patched: ${filePath}`);
        }
    } catch (err) {
        console.error(`Failed to read/write ${filePath}`, err);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else if (stat.isFile()) {
            const ext = path.extname(fullPath).toLowerCase();
            if (extensionsToReplace.includes(ext) || file === 'BUILD_ID') {
                replaceInFile(fullPath);
            }
        }
    }
}

targetDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        console.log(`Walking directory: ${dir}`);
        walkDir(dir);
    }
});

console.log('Finished patching paths.');
