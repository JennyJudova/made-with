import sirv from 'sirv';
import http from 'http';

const serve = sirv('dist', {
    single: true,
    dev: true,
    prefix: '/'
});

const server = http.createServer((req, res) => {
    // Remove the prefix from the URL for local serving
    if (req.url.startsWith('/')) {
        req.url = req.url.replace('/', '');
    }
    serve(req, res);
});

server.listen(8080, () => {
    console.log('Preview server running at http://localhost:8080/');
});