class clientController {
    constructor(customer){
        this.customer = customer;

    };

    registerCustomer = async  (req, res) => {
        try {
            const {name_clients, email, nif} = req.body;
            
            await this.customer.insertDatabase(name_clients, email, nif);
            return res.status(201).json(`${name_clients} Registered successfully!`);

        }catch(e){
            console.error(`[REGISTRATION ERROR]: ${e.message}`)
            return res.status(400).json({
                error: true,
                message: e.message
            });

            console.error(`[SERVER ERROR]: ${e.message}`)
            return res.status(500).json({
                erro: true, 
                mensagem: "internal server error occurred."
            });
        };
    };
};

module.exports = clientController;