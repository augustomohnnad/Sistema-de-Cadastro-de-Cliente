class clientModel {
    constructor(database) {
        this.database = database;
    };

    insertDatabase = async (name_client, email, nif) => {
        const sql = `
        INSERT INTO clients (name_client, email, nif )
        VALUES (?, ?, ?)
        `
        return await this.database.exec(sql, [name_client, email, nif])
    };

};

module.exports = clientModel;