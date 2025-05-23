// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next();
});

// Home route
app.get('/', (req, res) => {
    res.status(200).send(`
        <html>
            <head><title>Home</title></head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Node.js server.</p>
            </body>
        </html>
    `);
});

// About route
app.get('/about', (req, res) => {
    res.status(200).send(`
        <html>
            <head><title>About</title></head>
            <body>
                <h1>Welcome to the About Page</h1>
                <p>About us: at CADT, we love node.js!</p>
            </body>
        </html>
    `);
});

// Contact Us route
app.get('/contact-us', (req, res) => {
    res.status(200).send(`
        <html>
            <head><title>Contact Us</title></head>
            <body>
                <h1>Welcome to the Contact Us Page</h1>
                <p>You can reach us via email…</p>
            </body>
        </html>
    `);
});

// Products route
app.get('/products', (req, res) => {
    res.status(200).send(`
        <html>
            <head><title>Products</title></head>
            <body>
                <h1>Welcome to the Products Page</h1>
                <p>Buy one get one…</p>
            </body>
        </html>
    `);
});

// Projects route
app.get('/projects', (req, res) => {
    res.status(200).send(`
        <html>
            <head><title>Projects</title></head>
            <body>
                <h1>Welcome to the Projects Page</h1>
                <p>Here are our awesome projects</p>
            </body>
        </html>
    `);
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});