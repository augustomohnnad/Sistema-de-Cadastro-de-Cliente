const express = require('express');
const db = require('./database/conection')
const ClientModel = require('./models/clients_model');
const ClientController = require('./controller/clients_controller');
const ClientsRouter = require('./routes/clients_router');


const app = express()
app.use(express.json())
const PORT = 3000;

//Criando a injeção de depedencia
async function modularization(app) {
    try {
        const database = await db
        const models = new ClientModel(database)
        const controller = new ClientController(models)

        app.use("/api/clients", ClientsRouter(controller))

        console.log(`Modularization completed`)

    } catch(e) {
        console.error(`[MODULARIZATION ERROR]: ${e.message} `)
    }; 


};

// Lingando o servidor
async function systemStart() {
    try {
        await modularization(app)
        app.listen(PORT, () => {
            console.log("Servidor no AR");
        });

    } catch(e) {
        console.error(`Server failure ${e.message}`);
    }
}

systemStart()


