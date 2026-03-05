const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\hp\\hyrearky\\UNIQ-CEILINGS';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (file.endsWith('.html') || file.endsWith('.js')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        const target = '<a href="#" class="social-icon" aria-label="Instagram">';
        const replacement = '<a href="https://www.instagram.com/uniqceilings/" target="_blank" class="social-icon" aria-label="Instagram">';
        if (content.includes(target)) {
            content = content.replace(new RegExp(target, 'g'), replacement);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated ' + file);
        }
    }
});
