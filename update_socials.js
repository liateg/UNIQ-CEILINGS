const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\hp\\hyrearky\\UNIQ-CEILINGS';
const files = fs.readdirSync(dir);

let anyUpdated = false;

files.forEach(file => {
    if (file.endsWith('.html') || file.endsWith('.js')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        const regex = /(<!--\s*)?(<a\s+[^>]*aria-label="(?:TikTok|LinkedIn)"[^>]*>[\s\S]*?<\/a>)(?:\s*-->)?/g;
        
        content = content.replace(regex, (match, p1, p2) => {
            if (p1 && match.includes('-->')) {
                return match; // already commented
            } else {
                return `<!--\n${p2}\n-->`;
            }
        });

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated ' + file);
            anyUpdated = true;
        }
    }
});

if (!anyUpdated) {
    console.log('No files needed updating.');
}
