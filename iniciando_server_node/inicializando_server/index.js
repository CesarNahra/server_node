const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/objeto", (req, res) => {
    const objeto = req.body;
    res.json(objeto);
})

app.get("/names/:name", (req, res) => {
    const name = req.params.name;
    console.log(`Rota de API criada pelo(a): ${name}`);
    res.send(`Seu nome é: ${name}`);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});