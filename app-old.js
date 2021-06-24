const express = require('express');
const app = express();
const port = 8080;

// MIDDLEWARE
// PARA SERVIR CONTENIDO ESTÁTICO. LAS RUTAS PUBLICAS TIENEN PRIORIDAD SOBRE LAS OTRAS
app.use( express.static('public') );

app.get('/generic', (req, res) => {
    res.sendFile(`${__dirname}/public/generic.html`);
});

app.get('/elements', (req, res) => {
    res.sendFile(`${__dirname}/public/elements.html`);
});

// PAGINA DE ERROR PARA CUALQUIER RUTA QUE NO ESTÉ DEFINIDA
app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/404.html`);
});
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});