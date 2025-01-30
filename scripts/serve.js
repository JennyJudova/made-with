import sirv from 'sirv';
import http from 'http';

const serve = sirv('dist', {
    single: true,
    dev: true,
    prefix: '/made-with'
});

const server = http.createServer((req, res) => {
    // Remove the prefix from the URL for local serving
    if (req.url.startsWith('/made-with')) {
        req.url = req.url.replace('/made-with', '');
    }
    serve(req, res);
});

server.listen(8080, () => {
    console.log('Preview server running at http://localhost:8080/made-with/');
});