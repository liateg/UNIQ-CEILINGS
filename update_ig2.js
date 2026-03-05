const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\hp\\hyrearky\\UNIQ-CEILINGS';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (file.endsWith('.html') || file.endsWith('.js')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        const targetRegex = /<a href="#" class="social-icon" aria-label="Instagram">/g;
        const replacement = '<a href="https://instagram.com/uniqceilings" target="_blank" class="social-icon" aria-label="Instagram">';
        if (targetRegex.test(content)) {
            content = content.replace(targetRegex, replacement);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated ' + file);
        }
    }
});
