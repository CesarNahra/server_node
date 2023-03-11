const express = require("express");
const app = express();
const port = 3000;

app.post("/users/:id/:cargo", (req, res) => {
    const user = req.body;
    const cargo = req.params.cargo;

    if(cargo === "líder") {
        return res.status(200, {"mensagem": "Pode prosseguir"})
    } else {
        return res.status(406, {"mensagem": "Você não é líder"})
    }

    if(user < 21) {
        return {"mensagem": "Usuário não tem idade suficiente"};
    } else if(user === undefined) {
        return res.status(406, {"mensagem": "Está faltando dados para concluir a operação"})
    } else {
        return res.status(200, {"mensagem": "Criado com sucesso"});
    }
});

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;

    if(id === undefined) {
        return res.status(406, {"mensagem": "Está faltando dados para concluir a operação"})
    } else {
        return res.status(200, {"mensagem": "Deletado com sucesso"})
    }
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});