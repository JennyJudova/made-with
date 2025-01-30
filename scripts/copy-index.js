// scripts/copy-index.js
import fs from 'fs';

try {
    console.log('Starting copy-index.js...');
    
    // Read the index.html file
    const indexContent = fs.readFileSync('index.html', 'utf-8');

    // Create a 404.html file that redirects back to index
    const notFoundContent = indexContent;

    // Add base tag and update script source for production
    const updatedContent = indexContent
        .replace(
            '<meta name="viewport"',
            '<base href="/made-with/"><meta name="viewport"'
        )
        .replace(
            '<script type="module" src="./src/my-app.ts"></script>',
            '<script type="module" src="./my-app.js"></script>'
        );

    // Ensure dist directory exists
    if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist', { recursive: true });
    }

    // Write both files to the dist directory
    fs.writeFileSync('dist/index.html', updatedContent);
    fs.writeFileSync('dist/404.html', updatedContent);

    console.log('Successfully wrote dist/index.html and dist/404.html');

} catch (error) {
    console.error('Error in copy-index.js:', error);
    process.exit(1);
}
